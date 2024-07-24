import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import Card from '../components/Card/Card'

export default function PageCards() {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
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
        {/* Adicione mais SwiperSlides conforme necessário */}
      </Swiper>
    </div>
  )
}
