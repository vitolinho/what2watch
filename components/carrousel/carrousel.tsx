"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import { useEffect, useState } from "react"
import ResultCard from "../cards/resultCard"

interface CarousselProperties {
  images: string[]
}

const Carrousel: React.FC<CarousselProperties> = ({ images }) => {
  const [isNavigationEnabled, setNavigationEnabled] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      setNavigationEnabled(window.innerWidth > 768)
    }
    window.addEventListener("resize", handleWindowResize)
    handleWindowResize()
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])
  return (
    <div className="z-0">
      <Swiper loop={true} navigation={isNavigationEnabled} modules={[Pagination, Navigation]} slidesPerView={isNavigationEnabled ? 6 : 2} spaceBetween={20}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ResultCard key={index + 1} id={index + 1} image_path={image} showTitle={true} animation={true}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carrousel