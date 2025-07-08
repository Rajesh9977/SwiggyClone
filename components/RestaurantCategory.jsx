import React, { useState } from "react";
import { CDN_URL } from "../src/utils/constants";

const RestaurantCategory = ({data}) => {

    const[showItem, setshowItem] = useState(false)

    const handlebar = () =>{
        setshowItem(!showItem)

        console.log('clicked')
    }

    return ( 
        <div className="">
            <div className="w-6/12 m-auto my-3  bg-gray-200 p-4 border-b-2">
            <div className="flex justify-between cursor-pointer" onClick={handlebar}>
                <span className="font-bold text-center">{data.name}</span>
                <span>↓</span>
            </div>
           {showItem &&  <div className="flex justify-between">
            <div className='text-left'>
                <span className="">Dish - {data.name}</span>
                <h1>Price for two - {data.costForTwo}</h1>
                <p>rating - {data.avgRating}</p>
                <p>Location - {data.locality}</p>
            </div>
            <img className="w-20 h-20" src = {CDN_URL +
          data.cloudinaryImageId}/>
          <button className="bg-black text-white px-2 shadow-lg absolute ml-115 mt-15 rounded-lg">Add+</button>
            </div>}
            </div>
        </div>
    )
}

export default RestaurantCategory;