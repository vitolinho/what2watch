"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ResultCardProperties {
  image_path: string,
  title?:string,
  id: number,
  showTitle: boolean
}

const ResultCard: React.FC<ResultCardProperties> = ({ image_path, title, id, showTitle }) => {
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
    <div className="h-fit w-fit ease-in-out duration-300 hover:scale-125">
      <Link href={`/films/${id}`} className={"flex flex-col gap-y-4"}>
        <Image
          src={image_path}
          alt={image_path}
          height={200}
          width={isDesktop ? 300 : 184}
          className="rounded-md"
        />
        {showTitle && <p className="body-lg">{title}</p>}
      </Link>
    </div>
  )
}

export default ResultCard