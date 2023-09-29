import BackButton from "@/components/buttons/backButton"
import Button from "@/components/buttons/button"
import Footer from "@/components/footer/footer"
import NavBar from "@/components/navbar/navbar"
import VideoPlayer from "@/components/videoPlayer/videoPlayer"
import film from "@/data/film.json"

interface IParameters {
  filmId: number
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
        <div className="flex flex-col gap-y-10">
          <VideoPlayer movie_path={data.movie_path}/>
          <Button size="md" variant={"primary"} className="w-full">
            Télécharger
          </Button>
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