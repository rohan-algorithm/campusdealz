import React from 'react';
import ItemCard from './ItemCard';

const ItemList = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid auto-rows-max grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-10 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="w-full">
            <ItemCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
