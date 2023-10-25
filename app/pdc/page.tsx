import NavBar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import BackButton from "@/components/buttons/backButton"
import pdc from "@/data/pdc.json"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[60px] justify-center items-center">
      <NavBar/>
      <div className="flex flex-col gap-y-[60px] w-full px-5 mx-[60px] lg:w-[600px] lg:px-20">
        <BackButton/>
        <div className="flex flex-col gap-y-10">
          <p className="text-text-500 h5-hind-m lg:h4-hind-m">Politique de Confidentialité</p>
          <div className="flex flex-col gap-y-5">
            <p className="text-text-500 body-md lg:body-lg">Dernière mise à jour : 17/10/2023 Votre vie privée est importante pour nous. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles. En utilisant notre site de streaming, ci-après dénommé &apos;What2Watch&apos;, vous acceptez les conditions énoncées dans cette politique.</p>
            {pdc.map((content, index) => (
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