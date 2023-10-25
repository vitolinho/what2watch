"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Button from "@/components/buttons/button"

const Footer = () => {
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
    <div className={`${isDesktop ? "px-20 py-6" : "px-5 py-5"} w-full static bottom-0 flex flex-col gap-5`}>
      <div className={`${isDesktop ? "flex-row" : "flex-col"} flex gap-x-5`}>
        <Link href={"/cgu"}>
          <Button variant={"link"} size={`${isDesktop ? "md" : "lg"}`} className="pl-0">Conditions Générales d&apos;Utilisation</Button>
        </Link>
        <Link href={"/pdc"}>
          <Button variant={"link"} size={`${isDesktop ? "md" : "lg"}`} className="pl-0">Politique de Confidentialité</Button>
        </Link>
      </div>
      <p className="body-lg text-text-500">Tous les droits sont réservés à © what2watch-mauve.vercel.app | site crée par <a href="https://wa.me/767487478" className="text-primary-500 font-bold" target="_blank">Vitomir</a></p>
    </div>
  )
}

export default Footer