import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What2Watch - Conditions générales d'utilisation"
}

export default function CguLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}