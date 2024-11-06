import React from 'react'
import { Parallax } from 'react-parallax';
import spacestation from '/src/assets/spacestation.jpg'
const Imageone = () => {
  return (
    <Parallax className='image'  bgImage={spacestation}  strength={200}>
        <div className='content'>
            <span className='imgtxt'>A Trip To Space</span>
        </div>
    </Parallax>
  )
}

export default Imageone