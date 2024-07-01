import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';

const ItemList = (props) => {
  const [products, setProducts] = useState([]);
  
  const [college, setCollege] = useState('NIT Allahabad'); // Default college

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/product/getProducts', {
          params: { college },
        });
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [college]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="navbar bg-base-100">
        <div className="flex-1">
          <label className="input input-bordered flex items-center gap-1">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>college</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a onClick={() => setCollege('NIT Allahabad')}>NIT Allahabad</a>
                  </li>
                  <li>
                    <a onClick={() => setCollege('IIIT Allahabad')}>IIIT Allahabad</a>
                  </li>
                  <li>
                    <a onClick={() => setCollege('IIT Bombay')}>IIT Bombay</a>
                  </li>
                  <li>
                    <a onClick={() => setCollege('IIT Kanpur')}>IIT Kanpur</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="grid auto-rows-max xs:grid-cols-1 xs:gap-9 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 md:gap-10 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="w-full m-4">
            <ItemCard product={product} user={props}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
