import React, { useState } from 'react'
import Header from './Header'
import ImagesWrapper from './ImagesWrapper'
import RatingWrapper from './RatingWrapper'
import RatingComments from './RatingComments'
import HeaderContent from './HeaderContent'

const MainContent = ({gig }) => {
  const [ratings , setRatings] = useState([]);
  return (
    <div className=' flex-1 max-w-[70%] px-8 mr-[110px] '>
        <Header data={gig} />
        <ImagesWrapper images={gig.images}/>
        <HeaderContent gig={gig}/>
        <RatingComments ratings={ratings} setRatings={setRatings} gigId={gig.id} />
        <RatingWrapper setRatings={setRatings} freelancerId={gig.freelancer.id}/>
    </div>
  )
}

export default MainContent