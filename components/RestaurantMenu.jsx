import React, { useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu text-center">
      <div className="text-4xl text-black font-semibold mb-4">Restaurant Menu</div>
      {Array.isArray(resInfo) && resInfo.map((category, index) => (
        <RestaurantCategory
          key={category.id || index}
          data={category}
          showIndex={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
