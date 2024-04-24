import React from 'react'
import Header from './Header'
import ImagesWrapper from './ImagesWrapper'
import RatingGig from './RatingWrapper'
import RatingComments from './RatingComments'
import HeaderContent from './HeaderContent'

const MainContent = ({gig , order}) => {

  return (
    <div className='flex-1 px-8 mr-[110px]'>
        <Header data={gig} />
        <ImagesWrapper images={gig.images}/>
        <HeaderContent title={gig.title} desc={gig.description}/>
        <RatingComments/>
        <RatingGig gigId={gig.id} order={order}/>
    </div>
  )
}

export default MainContent