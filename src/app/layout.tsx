import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Olá meu nome é Allan",
  description: "Explore my portfolio as a Full Stack Developer, where I combine my passion for crafting web and mobile applications with front-end and back-end skills to deliver innovative digital solutions. Discover my projects, technologies, and web development expertise. Let's collaborate to bring your digital vision to life.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className='sm:p-5 md:p-10'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
