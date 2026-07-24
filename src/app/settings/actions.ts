'use server'

import bcrypt from 'bcryptjs'
import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import { UpdateProfileSchema, ChangePasswordSchema } from '@/lib/validations'
import type { UpdateProfileFormData, ChangePasswordFormData } from '@/lib/validations'

interface ActionResult {
  success: boolean
  error?: string
  fieldErrors?: Record<string, string>
}

export async function updateProfile(data: UpdateProfileFormData): Promise<ActionResult> {
  const session = await auth()

  if (!session?.user?.id) {
    return { success: false, error: 'You must be signed in to update your profile.' }
  }

  const parsed = UpdateProfileSchema.safeParse(data)

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as string
      if (!fieldErrors[key]) {
        fieldErrors[key] = issue.message
      }
    }
    return { success: false, error: 'Validation failed.', fieldErrors }
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { name: parsed.data.name.trim() },
    })

    return { success: true }
  } catch (e) {
    console.error('[updateProfile]', e)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}

export async function changePassword(data: ChangePasswordFormData): Promise<ActionResult> {
  const session = await auth()

  if (!session?.user?.id) {
    return { success: false, error: 'You must be signed in to change your password.' }
  }

  const parsed = ChangePasswordSchema.safeParse(data)

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as string
      if (!fieldErrors[key]) {
        fieldErrors[key] = issue.message
      }
    }
    return { success: false, error: 'Validation failed.', fieldErrors }
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { passwordHash: true },
    })

    if (!user?.passwordHash) {
      return { success: false, error: 'No password found for this account.' }
    }

    const isValid = await bcrypt.compare(parsed.data.currentPassword, user.passwordHash)

    if (!isValid) {
      return { success: false, fieldErrors: { currentPassword: 'Current password is incorrect.' } }
    }

    const hashedPassword = await bcrypt.hash(parsed.data.newPassword, 12)

    await prisma.user.update({
      where: { id: session.user.id },
      data: { passwordHash: hashedPassword },
    })

    return { success: true }
  } catch (e) {
    console.error('[changePassword]', e)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}