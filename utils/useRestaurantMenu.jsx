import React from "react";
import { useEffect, useState } from "react";
const useRestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    //fetchdata

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null')
        const json = await data.json();

        const allRests = json?.data?.cards || [];

    const restMenuDetails = allRests
      .filter((item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((item) => item.card.card.info);

      setResInfo(restMenuDetails);

    }
    return resInfo;
} 

export default useRestaurantMenu;