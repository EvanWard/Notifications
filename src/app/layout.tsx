import { Notifications } from './components/Notifications/Notifications'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Evan Ward Dev - POCs - Notifications',
  description: 'Notification system using PubSub-JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Notifications />
      </body>
    </html>
  )
}
