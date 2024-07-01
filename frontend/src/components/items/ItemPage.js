import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import ItemStats from './ItemStats';
import { Table } from './Table';
import Avatar from '../User/Avatar';

const ItemPage = (props) => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="flex flex-wrap m-8">
      <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
        <ImageSlider images={product.images} />
        <div className="flex flex-row justify-between">
          <h1 className="text-xl p-5">{product.title}</h1>
          <div className="stat-value">₹{product.price}</div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 p-5">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">Description</div>
          <div className="collapse-content">
            <p>{product.description}</p>
          </div>
        </div>
        <Table />
      </div>
      <div className="w-full lg:w-1/5">
        {/* <ItemStats /> */}
        <div className="flex justify-center p-3">
          <Avatar user={props}/>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
