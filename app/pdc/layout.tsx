import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité - What2Watch"
}

export default function PdcLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}