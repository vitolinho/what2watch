"use client"

import Button from "@/components/buttons/button"
import { useEffect, useState } from "react"
import { RiPlayFill } from "react-icons/ri"
import { RiInformationFill } from "react-icons/ri"

interface HomeCardPorperties {
  backgroundImage: string,
  title: string,
  description: string,
}

const HomeCard: React.FC<HomeCardPorperties> = ({ backgroundImage, title, description }) => {
  const cardStyle = {
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover"
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
    <div className={isDesktop ? "hidden" : "px-5"}>
      <div className="flex flex-col gap-y-3 h-fit rounded-md py-5" style={cardStyle}>
        <div className="flex flex-col justify-center items-center mt-[300px] px-5">
          <p className="h4-hind-m">{title}</p>
          <p className="button-sm">{description}</p>
        </div>
        <div className="px-7 py-3 flex flex-row justify-between">
          <Button variant={"primary"} size={"md"} icon={<RiPlayFill/>} iconPosition="left">Lecture</Button>
          <Button variant={"secondary"} size={"md"} icon={<RiInformationFill/>} iconPosition="left">Plus d&apos;infos</Button>
        </div>
      </div>
    </div>
  )
}

export default HomeCard