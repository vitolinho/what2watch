"use client"

import { useEffect, useState } from "react"

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
    <div className={`${isDesktop ? "px-20 py-6" : "px-5 py-5"} w-full static bottom-0`}>
      <p className="body-lg text-text-500">Tous les droits sont réservés à © what2watch.vercel.app | site crée par <a href="https://wa.me/767487478" className="text-primary-500 font-bold" target="_blank">Vitomir</a></p>
    </div>
  )
}

export default Footer