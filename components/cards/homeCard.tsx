"use client"

import Button from "@/components/buttons/button"
import { RiPlayFill } from "react-icons/ri"
import { RiInformationFill } from "react-icons/ri"

interface HomeCardPorperties {
  backgroundImage: string,
  title: string,
  info: string,
}

const HomeCard: React.FC<HomeCardPorperties> = ({ backgroundImage, title, info }) => {
  const cardStyle = {
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover"
  }
  return (
    <div className="flex flex-col gap-y-3 h-[450px]" style={cardStyle}>
      <div className="flex flex-col justify-center items-center mt-[300px]">
        <p className="h4-hind-m">{title}</p>
        <p className="button-sm">{info}</p>
      </div>
      <div className="px-7 py-3 flex flex-row justify-between">
        <Button variant={"primary"} size={"md"} icon={<RiPlayFill/>} iconPosition="left">Lecture</Button>
        <Button variant={"secondary"} size={"md"} icon={<RiInformationFill/>} iconPosition="left">Plus d&apos;infos</Button>
      </div>
    </div>
  )
}

export default HomeCard