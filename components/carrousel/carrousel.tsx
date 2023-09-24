"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import { useEffect, useState } from "react"
import Image from "next/image"

interface CarousselProperties {
  images: string[]
}

// TODO add good propotions

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
            <Image
              src={`${image}`}
              alt={`${image}`}
              height={200}
              width={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carrousel