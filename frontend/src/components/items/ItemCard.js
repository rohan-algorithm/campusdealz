import React from "react";
import { useNavigate } from "react-router-dom";
const ItemCard = (props) => {
  const navigate = useNavigate();
  const { product } = props;
  var image = "https://res.cloudinary.com/do1t9yc6x/image/upload/v1719772892/"+props.product.images[0];
  // console.log(image)
  const handleBuyNow = () => {
    navigate(`/item/${product._id}`, { state: { product } });
  };
  return (
    <div className="card card-compact w-full  bg-base-100 shadow-xl overflow-hidden">
      <figure className="card-side	">
        <img
          src={image}
          alt="Shoes"
          className="w-full h-40 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-base">{props.product.title}</h2>
        <p className="text-sm">
        {props.product.description}
        </p>
        <div className="flex justify-between items-center mb-2">
          <div className=" gap-1">
            <div className="stat w-1/2">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <div className="stat-value text-primary text-xs">{props.product.views}</div>
            </div>
            <div className="stat w-1/2">
              <div className="stat-figure text-secondary">
               
              </div>
              <div className=" card-title	text-secondary ">
              ₹{props.product.price}
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions  flex  justify-between	items-center">
           <button className="btn btn-primary-content" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</button>
           <button className="btn  btn-primary"onClick={handleBuyNow}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
