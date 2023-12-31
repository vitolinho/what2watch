import "./globals.css"
import type { Metadata } from "next"
import { Hind } from "next/font/google"

const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Accueil - What2Watch",
  description: "What2Watch is a streaming website"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={hind.className}>{children}</body>
    </html>
  )
}
