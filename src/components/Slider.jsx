import React from 'react'
import space1 from '/src/assets/space1.jpg'
import space2 from '/src/assets/space2.jpeg'
import kalpana from '/src/assets/kalpana.jpg'
import sunitha from '/src/assets/sunitha.jpg'

import william from '/src/assets/william.jpg'
import loreal from '/src/assets/loreal.jpg'
import space4 from '/src/assets/space4.avif'
import sate from '/src/assets/sate.jpg'

import rocket1 from '/src/assets/rocket1.jpg'
import space5 from '/src/assets/space5.jpg'



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (

      
    <div className='bg' style={{height:'500px',marginTop:'5px'}}>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide ><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/space2.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/kalpana.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/sunitha.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/william.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/loreal.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/space4.avif" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/sate.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/rocket1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{height:'400px',marginLeft:'500px',width:'500px',marginTop:'40px'}}  src="./src/assets/space5.jpg" alt="" /></SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Slider