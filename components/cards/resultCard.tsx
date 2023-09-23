"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface ResultCardProperties {
  image_path: string,
  title:string
}

const ResultCard = ({ image_path, title }:ResultCardProperties) => {
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
    <div className="flex flex-col gap-y-4 h-fit w-fit">
      <Image
        src={image_path}
        alt={image_path}
        height={200}
        width={isDesktop ? 200 : 184}
      />
      <p className="body-lg">{title}</p>
    </div>
  )
}

export default ResultCard