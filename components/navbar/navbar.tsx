"use client"

import Image from "next/image"
import Button from "@/components/buttons/button"
import { RxHamburgerMenu } from "react-icons/rx"
import { CgClose } from "react-icons/cg"
import { FiSearch } from "react-icons/fi"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  // TODO add good paths
  const menuLinks = [
    { path: "/", label: "accueil" },
    { path: "/#", label: "films" },
    { path: "/#", label: "séries" }
  ]

  const pathname = usePathname()

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
    <div className="w-full bg-background-500 py-4 lg:py-6">
      <div className="flex flex-row justify-between items-center px-5 lg:px-20">
        <div className="flex flex-row gap-x-20">
          <Image
            alt="what2watch-logo"
            width={150}
            height={31}
            src={"/what2watch-logo.svg"}
          />
          <div className={isDesktop ? "flex flex-row gap-x-5" : "hidden"}>
            {menuLinks.map((link) => (
              <Link href={link.path} key={link.label}>
                <Button variant={"link"} size="lg" className={`${pathname === link.path ? "text-primary-500" : "text-text-500"} capitalize`}>{link.label}</Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-x-5">
          <Button variant={"link"} size="icon" className="text-2xl">
            {/* TODO add good path */}
            <Link href={"/#"}>
              <FiSearch/>
            </Link>
          </Button>
          {!isDesktop &&
            <Button variant={"link"} size="icon" className="text-2xl" onClick={handleMenu}>
              { isMenuOpen ? <CgClose /> : <RxHamburgerMenu/> }
            </Button>
          }
        </div>
      </div>
      {isMenuOpen && (
        <div className={"w-full h-fit flex flex-col gap-y-3 pt-5 pb-3 lg:hidden"}>
          {menuLinks.map((link) => (
            <Link href={link.path} key={link.label}>
              <Button key={link.label} variant={"link"} size="md" className={`${pathname === link.path ? "text-primary-500" : "text-text-500"} capitalize`}>{link.label}</Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavBar