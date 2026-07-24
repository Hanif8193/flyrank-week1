'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  UpdateProfileSchema,
  ChangePasswordSchema,
  type UpdateProfileFormData,
  type ChangePasswordFormData,
} from '@/lib/validations'
import { updateProfile, changePassword } from './actions'

interface SettingsFormProps {
  user: {
    name: string
    email: string
  }
}

export function SettingsForm({ user }: SettingsFormProps) {
  const [profileSuccess, setProfileSuccess] = useState(false)
  const [profileServerError, setProfileServerError] = useState<string | null>(null)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [passwordServerError, setPasswordServerError] = useState<string | null>(null)

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    setError: setProfileError,
    formState: { errors: profileErrors },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      name: user.name,
    },
  })

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    setError: setPasswordError,
    reset: resetPassword,
    formState: { errors: passwordErrors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const [isSubmittingProfile, setIsSubmittingProfile] = useState(false)
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false)

  const onSubmitProfile = async (data: UpdateProfileFormData) => {
    setIsSubmittingProfile(true)
    setProfileSuccess(false)
    setProfileServerError(null)

    try {
      const result = await updateProfile(data)

      if (!result.success) {
        if (result.fieldErrors) {
          for (const [field, message] of Object.entries(result.fieldErrors)) {
            setProfileError(field as keyof UpdateProfileFormData, { message })
          }
        }
        if (result.error && !result.fieldErrors) {
          setProfileServerError(result.error)
        }
        return
      }

      setProfileSuccess(true)
    } catch {
      setProfileServerError('Something went wrong. Please try again.')
    } finally {
      setIsSubmittingProfile(false)
    }
  }

  const onSubmitPassword = async (data: ChangePasswordFormData) => {
    setIsSubmittingPassword(true)
    setPasswordSuccess(false)
    setPasswordServerError(null)

    try {
      const result = await changePassword(data)

      if (!result.success) {
        if (result.fieldErrors) {
          for (const [field, message] of Object.entries(result.fieldErrors)) {
            setPasswordError(field as keyof ChangePasswordFormData, {
              message,
            })
          }
        }
        if (result.error && !result.fieldErrors) {
          setPasswordServerError(result.error)
        }
        return
      }

      resetPassword()
      setPasswordSuccess(true)
    } catch {
      setPasswordServerError('Something went wrong. Please try again.')
    } finally {
      setIsSubmittingPassword(false)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Profile Section */}
      <div className="border-border bg-card rounded-2xl border p-8 shadow-lg">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Profile</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Update your personal information.
          </p>
        </div>

        {profileSuccess && (
          <div
            role="status"
            className="bg-primary/10 text-primary mb-6 flex items-center gap-2 rounded-lg px-4 py-3 text-sm"
          >
            <CheckCircle2 className="size-4" />
            Profile updated successfully.
          </div>
        )}

        {profileServerError && (
          <div
            role="alert"
            aria-live="polite"
            className="bg-destructive/10 text-destructive mb-6 rounded-lg px-4 py-3 text-sm"
          >
            {profileServerError}
          </div>
        )}

        <form
          noValidate
          onSubmit={handleSubmitProfile(onSubmitProfile)}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="settings-name">Full Name</Label>
            <Input
              id="settings-name"
              type="text"
              placeholder="Jane Doe"
              aria-describedby={
                profileErrors.name ? 'settings-name-error' : undefined
              }
              aria-invalid={!!profileErrors.name}
              disabled={isSubmittingProfile}
              {...registerProfile('name')}
            />
            {profileErrors.name && (
              <p
                id="settings-name-error"
                role="alert"
                aria-live="polite"
                className="text-destructive text-sm"
              >
                {profileErrors.name.message}
              </p>
            )}
          </div>

          {/* Email (Read-only) */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="settings-email">Email</Label>
            <Input
              id="settings-email"
              type="email"
              value={user.email}
              disabled
              readOnly
              className="text-muted-foreground cursor-not-allowed"
            />
            <p className="text-muted-foreground text-xs">
              Email cannot be changed for security reasons.
            </p>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="mt-2 h-11 w-full px-8"
            disabled={isSubmittingProfile}
            aria-label={isSubmittingProfile ? 'Saving profile' : undefined}
          >
            {isSubmittingProfile ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Profile'
            )}
          </Button>
        </form>
      </div>

      {/* Password Section */}
      <div className="border-border bg-card rounded-2xl border p-8 shadow-lg">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Update your password to keep your account secure.
          </p>
        </div>

        {passwordSuccess && (
          <div
            role="status"
            className="bg-primary/10 text-primary mb-6 flex items-center gap-2 rounded-lg px-4 py-3 text-sm"
          >
            <CheckCircle2 className="size-4" />
            Password changed successfully.
          </div>
        )}

        {passwordServerError && (
          <div
            role="alert"
            aria-live="polite"
            className="bg-destructive/10 text-destructive mb-6 rounded-lg px-4 py-3 text-sm"
          >
            {passwordServerError}
          </div>
        )}

        <form
          noValidate
          onSubmit={handleSubmitPassword(onSubmitPassword)}
          className="flex flex-col gap-5"
        >
          {/* Current Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="settings-current-password">
              Current Password
            </Label>
            <Input
              id="settings-current-password"
              type="password"
              placeholder="Enter your current password"
              aria-describedby={
                passwordErrors.currentPassword
                  ? 'settings-current-password-error'
                  : undefined
              }
              aria-invalid={!!passwordErrors.currentPassword}
              disabled={isSubmittingPassword}
              autoComplete="current-password"
              {...registerPassword('currentPassword')}
            />
            {passwordErrors.currentPassword && (
              <p
                id="settings-current-password-error"
                role="alert"
                aria-live="polite"
                className="text-destructive text-sm"
              >
                {passwordErrors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="settings-new-password">New Password</Label>
            <Input
              id="settings-new-password"
              type="password"
              placeholder="Minimum 8 characters"
              aria-describedby={
                passwordErrors.newPassword
                  ? 'settings-new-password-error'
                  : undefined
              }
              aria-invalid={!!passwordErrors.newPassword}
              disabled={isSubmittingPassword}
              autoComplete="new-password"
              {...registerPassword('newPassword')}
            />
            {passwordErrors.newPassword && (
              <p
                id="settings-new-password-error"
                role="alert"
                aria-live="polite"
                className="text-destructive text-sm"
              >
                {passwordErrors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="settings-confirm-password">
              Confirm New Password
            </Label>
            <Input
              id="settings-confirm-password"
              type="password"
              placeholder="Re-enter your new password"
              aria-describedby={
                passwordErrors.confirmPassword
                  ? 'settings-confirm-password-error'
                  : undefined
              }
              aria-invalid={!!passwordErrors.confirmPassword}
              disabled={isSubmittingPassword}
              autoComplete="new-password"
              {...registerPassword('confirmPassword')}
            />
            {passwordErrors.confirmPassword && (
              <p
                id="settings-confirm-password-error"
                role="alert"
                aria-live="polite"
                className="text-destructive text-sm"
              >
                {passwordErrors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="mt-2 h-11 w-full px-8"
            disabled={isSubmittingPassword}
            aria-label={isSubmittingPassword ? 'Changing password' : undefined}
          >
            {isSubmittingPassword ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Changing...
              </>
            ) : (
              'Change Password'
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}