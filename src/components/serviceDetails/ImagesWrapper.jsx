import React from 'react'
import App from './ImageSlider'
import ImagesSlider from './ImageSlider'

const ImagesWrapper = ({images}) => {
  return (
    <div className='w-full lg:h-[450px] my-5  rounded-md border  overflow-hidden bg-slate-200'>
      <ImagesSlider images={images}/>
    </div>
  )
}

export default ImagesWrapper