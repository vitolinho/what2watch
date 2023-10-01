import HomeCard from "@/components/cards/homeCard"
import Carrousel from "@/components/carrousel/carrousel"
import Footer from "@/components/footer/footer"
import NavBar from "@/components/navbar/navbar"
import HeroBanner from "@/components/heroBanner/heroBanner"
import film from "@/data/film.json"

const getRandomElement = (list:any[]) => {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

export default function Home() {
  const images: any[] = []
  {film.map((film:any)=> {
    images.push(film.image_path)
  })}
  let randomMovie = getRandomElement(film)
  return (
    <>
      <NavBar/>
      <div className="py-10 flex flex-col gap-y-10 lg:pt-0">
        <HomeCard backgroundImage={randomMovie.image_path} title={randomMovie.title} description={randomMovie.gender} id={randomMovie.id}/>
        <HeroBanner backgroundImage={randomMovie.image_path} title={randomMovie.title} description={randomMovie.synopsis} id={randomMovie.id}/>
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
