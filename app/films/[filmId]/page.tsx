import BackButton from "@/components/buttons/backButton"
import Button from "@/components/buttons/button"
import Footer from "@/components/footer/footer"
import NavBar from "@/components/navbar/navbar"
import VideoPlayer from "@/components/videoPlayer/videoPlayer"
import film from "@/data/film.json"
import type { Metadata } from "next"

interface IParameters {
  filmId: number
}

export async function generateMetadata({ params }: { params:IParameters}): Promise<Metadata> {
  const data = film[params.filmId - 1]
  return {
    title: `${data.title} - What2Watch`
  }
}

export default function Home({ params }:{ params:IParameters}) {
  const data = film[params.filmId - 1]
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar/>
      <div className="flex flex-col gap-y-[60px] px-5 py-10 lg:px-20 lg:py-20 lg:w-[800px]">
        <BackButton/>
        <div className="flex flex-col gap-y-5">
          <p className="h5-hind-m">{data.title}</p>
          <p className="body-md">{data.synopsis}</p>
        </div>
        <div className="flex flex-col gap-y-10" id="watch-movie">
          <VideoPlayer movie_path={data.movie_path}/>
          <a href={data.movie_path} download>
            <Button size="md" variant={"primary"} className="w-full">
              Télécharger
            </Button>
          </a>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="body-md">Réalisateur: {data.realisator}</p>
          <p className="body-md">Acteurs: {data.actors}</p>
          <p className="body-md">Genre: {data.gender}</p>
          <p className="body-md">Durée: {data.duration}</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}