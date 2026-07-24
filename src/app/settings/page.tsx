import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import type { Metadata } from 'next'
import { SettingsForm } from './settings-form'

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Manage your FlowPilot account settings.',
}

export default async function SettingsPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Settings
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Manage your account settings and preferences.
        </p>
      </div>

      <SettingsForm
        user={{
          name: session.user.name ?? '',
          email: session.user.email ?? '',
        }}
      />
    </section>
  )
}