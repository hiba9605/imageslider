import React from 'react'
import { Parallax } from 'react-parallax';
import nasa from '/src/assets/nasa.jpg'

const Imagethree = () => {
  return (
    <Parallax className='image'  bgImage={nasa}  strength={200}>
    <div className='content'>
        <span className='imgtxt'>A Trip To Space</span>
    </div>
</Parallax>
  )
}

export default Imagethree