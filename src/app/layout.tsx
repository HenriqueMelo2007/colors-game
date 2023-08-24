import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jogo das cores',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='box-border p-0 m-0 text-white' lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
