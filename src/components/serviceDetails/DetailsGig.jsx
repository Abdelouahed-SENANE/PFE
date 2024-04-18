import React from 'react'

const DetailsGig = ({title , desc}) => {
  return (
    <div>
        <h1 className='text-2xl '>Details Service</h1>
        <p className='my-4'>We are deeply committed to crafting professional {title} that align with your specific requirements.</p>
        <p className='text-gray-600'>{desc}</p>
    </div>
  )
}

export default DetailsGig