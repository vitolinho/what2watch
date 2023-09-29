"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/buttons/button"
import { PiCaretLeftBold } from "react-icons/pi"
import { useEffect, useState } from "react"

const BackButton = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }

  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    window.addEventListener("resize", handleWindowResize)
    handleWindowResize()
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    <div className={isDesktop ? "hidden" : "flex"}>
      <Button variant={"link"} size="icon" className="text-2xl text-primary-500 pr-5" onClick={handleBackClick}>
        <PiCaretLeftBold className="w-6 h-full"/>
      </Button>
    </div>
  )
}

export default BackButton