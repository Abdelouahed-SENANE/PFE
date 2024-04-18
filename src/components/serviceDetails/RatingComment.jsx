import React from 'react'
import test from "@assets/images/test.jpg";
import { FaStar } from "react-icons/fa";
const RatingComment = ({ratings}) => {
  return (
    <>
    <div className='mt-5 mb-3'>
        <h2 className='text-2xl'>Customer reviews</h2>
    </div>
       <div className="mb-5 flex items-start gap-5 border-t py-5 border-primary">
    <div>
        <img src={test} alt="" className="h-12 w-12 rounded-full" />
    </div>
    <div className="flex-1">
        <h4 className="text-lg">Name</h4>
        <p className="flex  text-md items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span>4.9</span>
            <span className='text-sm text-gray-500'>Date Rating</span>
        </p>
        <div className="my-2">
            <p>
                Haroon was very approachable and easy to communicate
                with. Work was done ahead of schedule and any changes
                were actioned promptly and to the desired specs. He was
                always happy to help and answer questions. Will be
                coming back in future projects
            </p>
        </div>
    </div>
</div>
    </>
  )
}

export default RatingComment
