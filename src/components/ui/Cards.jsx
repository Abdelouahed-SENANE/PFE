import React from "react";
import noData from '@assets/images/no-data.png'
import Card from "./Card";
const Cards = ({ data }) => {

    return (
        <div className="container mx-auto">
            {data && data.length > 0 ? (
                <div className="grid mt-10 grid-cols-3 gap-5">
                    {data.map((card) => (
                        <Card card={card}/>
                        
                    ))}
                </div>
            ) : (
                <div className="text-center mt-8 flex flex-col justify-center items-center w-full min-h-[20vh] text-gray-500">
                    <img src={noData} alt="noData" className="w-[80px]" />
                    <p className="text-xl my-3">Sorry, we couldn't find any items to display.</p>
                </div>
            )}
        </div>
    );
};

export default Cards;
