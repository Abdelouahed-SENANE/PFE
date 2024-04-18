import React from 'react'
import Header from './Header'
import ImagesWrapper from './ImagesWrapper'
import DetailsGig from './DetailsGig'
import RatingGig from './RatingWrapper'
import RatingComments from './RatingComments'

const MainContent = ({gig}) => {
  return (
    <div className='flex-1 px-8 mr-[110px]'>
        <Header data={gig} />
        <ImagesWrapper images={gig.images}/>
        <DetailsGig title={gig.title} desc={gig.description}/>
        <RatingComments/>
        <RatingGig/>
    </div>
  )
}

export default MainContent