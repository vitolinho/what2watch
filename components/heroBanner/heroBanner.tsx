/* eslint-disable no-unused-vars */
"use client"

import { useEffect, useState } from "react"
import Button from "@/components/buttons/button"
import { RiPlayFill } from "react-icons/ri"
import { RiInformationFill } from "react-icons/ri"

interface HeroBannerProperties {
  backgroundImage: string,
  title: string,
  description: string
}

const HeroBanner: React.FC<HeroBannerProperties> = ({ backgroundImage, title, description }) => {
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
    <div className={isDesktop ? "h-screen w-full flex justify-start items-end z-0" : "hidden"} style={cardStyle}>
      <div className="w-[900px] flex flex-col gap-y-10 px-20 py-[120px] z-1">
        <div className="flex flex-col gap-y-3">
          <p className="h5-hind-d">Harry Potter 1</p>
          <p className="body-lg">Harry Potter, un jeune orphelin, est élevé par son oncle et sa tante qui le détestent. Alors qu&apos;il était haut comme trois pommes, ces derniers lui ont raconté que ses parents étaient morts dans un accident de voiture. Le jour de son onzième anniversaire, Harry reçoit la visite inattendue d&apos;un homme gigantesque se nommant Rubeus Hagrid, et celui-ci lui révèle qu&apos;il est en fait le fils de deux puissants magiciens et qu&apos;il possède lui aussi d&apos;extraordinaires pouvoirs.</p>
        </div>
        <div className="flex flex-row gap-x-10 z-1">
          <Button variant={"primary"} size={"lg"} icon={<RiPlayFill/>} iconPosition="left">Lecture</Button>
          <Button variant={"secondary"} size={"lg"} icon={<RiInformationFill/>} iconPosition="left">Plus d&apos;infos</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner