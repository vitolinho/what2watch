"use client"

import Image from "next/image"
import Button from "@/components/buttons/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RiPlayFill } from "react-icons/ri"
import { RiInformationFill } from "react-icons/ri"

interface HomeCardPorperties {
  backgroundImage: string,
  title: string,
  description: string,
  id:number
}

const HomeCard: React.FC<HomeCardPorperties> = ({ backgroundImage, title, description, id }) => {
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
    <div className={isDesktop ? "hidden" : "px-5"}>
      <div className="relative gap-y-3 h-fit rounded-md py-5 z-0">
        <Image
          src={backgroundImage}
          alt="test"
          width={100}
          height={100}
          className="w-full h-full opacity-50 object-cover z-10 rounded-md"/>
        <div className="absolute top-0 left-0 w-full h-fit mt-[200px] py-5">
          <div className="relative z-10">
            <div className="flex flex-col justify-center items-center px-2 z-20">
              <p className="h4-hind-m">{title}</p>
              <p className="button-sm">{description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 px-2 z-20">
            <Link href={`/films/${id}/#watch-movie`}>
              <Button variant={"primary"} size={"md"} icon={<RiPlayFill/>} iconPosition="left" className="w-full">Lecture</Button>
            </Link>
            <Link href={`/films/${id}`}>
              <Button variant={"secondary"} size={"md"} icon={<RiInformationFill/>} iconPosition="left" className="w-full">Plus d&apos;infos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard