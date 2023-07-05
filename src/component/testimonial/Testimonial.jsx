import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper'

import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: AVTR2,
    cname: 'Ahmad Iskandar',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eius aut eveniet, perspiciatis magnam accusamus minus, nihil dolores quaerat doloribus labore dicta repellat nesciunt, tempore itaque corporis perferendis a sint.'
  },
  {
    id: 2,
    image: AVTR1,
    cname: 'Dwi Isnaenni',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eius aut eveniet, perspiciatis magnam accusamus minus, nihil dolores quaerat doloribus labore dicta repellat nesciunt, tempore itaque corporis perferendis a sint.'
  },
  {
    id: 3,
    image: AVTR3,
    cname: 'Prayuda Wahyu',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eius aut eveniet, perspiciatis magnam accusamus minus, nihil dolores quaerat doloribus labore dicta repellat nesciunt, tempore itaque corporis perferendis a sint.'
  },
  {
    id: 4,
    image: AVTR4,
    cname: 'Tania Siti',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eius aut eveniet, perspiciatis magnam accusamus minus, nihil dolores quaerat doloribus labore dicta repellat nesciunt, tempore itaque corporis perferendis a sint.'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ id, image, cname, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt="" />
                </div>
                  <h5 className='client__name'>{cname}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial