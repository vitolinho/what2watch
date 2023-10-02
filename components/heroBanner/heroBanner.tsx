/* eslint-disable no-unused-vars */
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Button from "@/components/buttons/button"
import { RiPlayFill } from "react-icons/ri"
import { RiInformationFill } from "react-icons/ri"
import Link from "next/link"

interface HeroBannerProperties {
  backgroundImage: string,
  title: string,
  description: string,
  id:number
}

const HeroBanner: React.FC<HeroBannerProperties> = ({ backgroundImage, title, description, id }) => {
  // const cardStyle = {
  //   background: `url(${backgroundImage}) no-repeat center center`,
  //   backgroundSize: "cover"
  // }
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
    <div className={isDesktop ? "relative h-screen w-full flex justify-start items-end z-0" : "hidden"}>
      <Image
        src={backgroundImage}
        alt="test"
        fill
        className="w-full h-full opacity-50 object-cover z-10"/>
      <div className="w-[900px] flex flex-col gap-y-10 px-20 py-[120px] z-20">
        <div className="flex flex-col gap-y-3">
          <p className="h5-hind-d">{title}</p>
          <p className="body-lg">{description}</p>
        </div>
        <div className="flex flex-row gap-x-10 z-20">
          <Link href={`/films/${id}/#watch-movie`}>
            <Button variant={"primary"} size={"lg"} icon={<RiPlayFill/>} iconPosition="left">Lecture</Button>
          </Link>
          <Link href={`/films/${id}`}>
            <Button variant={"secondary"} size={"lg"} icon={<RiInformationFill/>} iconPosition="left">Plus d&apos;infos</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner