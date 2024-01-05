import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recherche - What2Watch"
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}