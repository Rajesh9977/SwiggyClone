import React from 'react';
import { CDN_URL } from '../src/utils/constants';

function Card({resData}) {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
      } = resData;

  return (
    <div className='card bg-zinc-300 w-40 m-3 rounded-md h-60 flex flex-col justify-center items-center'>
        <img className='w-35 h-30 
object-fit: contain' src={CDN_URL +
          cloudinaryImageId}/>
        <h1 className='font-semibold'>{name}</h1>
        <h1>Rs {costForTwo}</h1>
        <h1 className='text-zinc-500'>Rating : {avgRating} ✨ </h1>
    </div>
  )
} ;

const withPromotedLabel = (Card) =>{
  return ()=>{
    return(
      <div>
        <label>Promoted</label>
        <Card/>
      </div>
    )

  }
}


export default Card
