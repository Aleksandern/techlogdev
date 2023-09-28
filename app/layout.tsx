import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from './comps/Providers';
import AppBrowser from './comps/AppBrowser';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBrowser>
          <Providers>
            {children}
          </Providers>
        </AppBrowser>
      </body>
    </html>
  )
}
