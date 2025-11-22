import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Canon Camera Animation',
  description: 'Canon logo transforms into a camera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
