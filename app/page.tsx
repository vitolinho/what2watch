import HomeCard from "@/components/cards/homeCard"
import Carrousel from "@/components/carrousel/carrousel"
import Footer from "@/components/footer/footer"
import NavBar from "@/components/navbar/navbar"
import HeroBanner from "@/components/heroBanner/heroBanner"

export default function Home() {
  const images = [
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg",
    "/films/hp-1.jpg"
  ]
  return (
    <>
      <NavBar/>
      <div className="py-10 flex flex-col gap-y-10 lg:pt-0">
        <HomeCard backgroundImage={"/films/hp-1.jpg"} title={"Harry Potter 1"} description={"Science Fiction · Magie · Avada Kedavra"} />
        <HeroBanner backgroundImage={"/films/hp-1.jpg"} title={""} description={""}/>
        <div className="flex flex-col gap-y-5 pl-5 lg:pl-20">
          <p className="button-lg lg:h6-hind-d">Tendances actuelles</p>
          <Carrousel images={images}/>
        </div>
        <div className="flex flex-col gap-y-5 pl-5 lg:pl-20">
          <p className="button-lg lg:h6-hind-d">Récemment ajoutés</p>
          <Carrousel images={images}/>
        </div>
        <div className="flex flex-col gap-y-5 pl-5 lg:pl-20">
          <p className="button-lg lg:h6-hind-d">Nouveautés</p>
          <Carrousel images={images}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
