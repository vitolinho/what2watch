"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ResultCardProperties {
  image_path: string,
  title:string,
  id: number
}

const ResultCard: React.FC<ResultCardProperties> = ({ image_path, title, id }) => {
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
      <Link href={`/films/${id}`} >
        <Image
          src={image_path}
          alt={image_path}
          height={200}
          width={isDesktop ? 200 : 184}
        />
        <p className="body-lg">{title}</p>
      </Link>
    </div>
  )
}

export default ResultCard