import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { EffectCoverflow } from 'swiper/modules'
import Card from '../components/Card/Card'

// import './index.css'

export default function PageCards() {
  return (
    <div className="h-[calc(100vh-68px)] bg-zinc-800">
      <div className="mx-auto  w-full max-w-screen-xl ">
        <p className="text-4xl font-bold text-orange-800">Os mais populares</p>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          <SwiperSlide>
            <Card
              course="Sistemas de Informação"
              typeCourse="Bacharelado"
              numberPeriod="8"
              modality="Remoto"
              price="300,00"
              shift="Vespertino"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              course="Engenharia de Software"
              typeCourse="Bacharelado"
              numberPeriod="10"
              modality="Presencial"
              price="400,00"
              shift="Matutino"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              course="Ciência da Computação"
              typeCourse="Bacharelado"
              numberPeriod="8"
              modality="Presencial"
              price="350,00"
              shift="Noturno"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              course="Ciência da Computação"
              typeCourse="Bacharelado"
              numberPeriod="8"
              modality="Presencial"
              price="350,00"
              shift="Noturno"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              course="Ciência da Computação"
              typeCourse="Bacharelado"
              numberPeriod="8"
              modality="Presencial"
              price="350,00"
              shift="Noturno"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              course="Ciência da Computação"
              typeCourse="Bacharelado"
              numberPeriod="8"
              modality="Presencial"
              price="350,00"
              shift="Noturno"
            />
          </SwiperSlide>
          {/* Adicione mais SwiperSlides conforme necessário */}
        </Swiper>
      </div>
    </div>
  )
}
