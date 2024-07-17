import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Card from '../components/Card/Card'

export default function PageCards() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="flex h-screen">
      <div className="flex w-full p-2">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="p-2"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
        >
          <Card
            course="Sistemas de Informação"
            typeCouser="Licenciatura"
            numberPeriod="6"
            modality="Presencial"
            price="300,00"
            shift="Noturno"
          />

          <Card
            course="Sistemas de Informação"
            typeCouser="Bacharelado"
            numberPeriod="8"
            modality="Remoto"
            price="300,00"
            shift="Vespertino"
          />

          <Card
            course="Engenharia de Software"
            typeCouser="Bacharelado"
            numberPeriod="10"
            modality="Presencial"
            price="400,00"
            shift="Matutino"
          />

          <Card
            course="Ciência da Computação"
            typeCouser="Bacharelado"
            numberPeriod="8"
            modality="Presencial"
            price="350,00"
            shift="Noturno"
          />
        </Carousel>
      </div>
    </div>
  )
}
