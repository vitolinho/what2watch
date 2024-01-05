import type { Metadata } from "next"

export const metadata: Metadata = {
  title:"Films - What2Watch"
}

export default function FilmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}