import ResultCard from "@/components/cards/resultCard"
import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import film from "@/data/film.json"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col gap-y-10 px-5 py-10 lg:px-20 lg:py-20">
        <p className="button-lg lg:h6-hind-d">Nos Films</p>
        <div className="grid grid-cols-2 gap-10 gap-y-20 lg:grid-cols-6">
          {film.map((film:any)=> {
            return <ResultCard key={film.id} id={film.id} image_path={film.image_path} title={film.title} showTitle={true} animation={false}/>
          })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}