import type { Metadata } from "next"
import { Inter } from "next/font/google"

import TRPCProvider from "./_trpc/Provider"
import "./globals.css"
import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"

import { ToastProvider } from "@/components/provider/toaster-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Exam Hall plan generator",
  description: "Generate exam hall plans for your school or institution",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <TRPCProvider>
        <html lang="en">
          <body className={inter.className}>
            <ToastProvider />
            <div className="dark:bg-grid-medium-white/[0.2] bg-grid-small-black/[0.2] relative h-screen  w-full bg-white dark:bg-black">
              {/* Radial gradient for the container to give a faded look */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
              {children}
            </div>
          </body>
        </html>
      </TRPCProvider>
    </SessionProvider>
  )
}
