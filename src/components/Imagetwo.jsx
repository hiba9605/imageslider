import React from 'react'
import { Parallax } from 'react-parallax'
import satellite from '/src/assets/satellite.jpg'


const Imagetwo = () => {
  return (
    <Parallax className='image'  bgImage={satellite}  strength={200}>
    <div className='content'>
        <span className='imgtxt'>A Trip To Space</span>
    </div>
</Parallax>

  )
}

export default Imagetwo