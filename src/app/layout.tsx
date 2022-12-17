import { Inter } from '@next/font/google'

import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  )
}
