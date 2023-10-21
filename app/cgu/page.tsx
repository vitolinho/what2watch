import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import cgu from "@/data/cgu.json"
import BackButton from "@/components/buttons/backButton"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[60px] justify-center items-center">
      <Navbar/>
      <div className="flex flex-col gap-y-[60px] w-full px-5 mx-[60px] lg:w-[600px] lg:px-20">
        <BackButton/>
        <div className="flex flex-col gap-y-10">
          <p className="text-text-500 h5-hind-m lg:h4-hind-m">Conditions Générales d&apos;Utilisation</p>
          <div className="flex flex-col gap-y-5">
            {cgu.map((content, index) => (
              <p className="text-text-500 body-md lg:body-lg" key={index}>
                {content.id}.{content.content}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}