import React, { useEffect, useState } from 'react'
import Card from './Card'
import resList from '../src/utils/MockData'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from './useOnlineStatus';

function Body() {
    const [list, setList] = useState([]);
    const [searchText, setsearchText] = useState('')

    console.log('hello')


    useEffect(()=>{
      fetchData();

    },[]);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await data.json();
      // console.log(json);
    
      // Safely extract restaurant cards
      const allCards = json?.data?.cards || [];
    
      const restaurants = allCards
        .filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((card) => card.card.card.info);
    
      setList(restaurants); // sets clean list of restaurant info objects
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
      return (
        <h1 className='text-2xl'>Looks like you are offline!! Please check your internet connection</h1>
      )
    

    if(list.length===0){
      return <Shimmer/>
    }
    
    
    
  return (
    <div>
      <div className='search gap-1 flex mt-1'>
        <input type='text' className='search-box border-2' value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
        <button onClick={()=>{
          const filteredRest = list.filter((res)=>
          res.name.includes(searchText));
          setList(filteredRest)
        }} className='px-1 py-2 bg-orange-400 rounded-md'> Search</button>
      </div>
      <div className='filter'></div>
      <div className='res-container flex flex-wrap '>
        {list.map((item) => (
  <Link to={'/restaurants/' + item.id }><Card resData={item} key={item.id} /></Link>
))}
      </div>
    </div>
  )
}

export default Body
