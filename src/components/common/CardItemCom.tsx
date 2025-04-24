import React from 'react';
import Rating from './RatingCom';

interface CardItemProps {
  title: string;
  category: string;
  rating: number;
  price: number;
  linkImg: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, category, rating, price, linkImg }) => {
  return (
    <a
      className="group block bg-gray-100 rounded-lg overflow-hidden shadow-md my-4 mx-2 transition-transform duration-300"
    >
      <div className="w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={linkImg}
          alt={title}
          className="object-cover object-center w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-125"
        />
      </div>
      <div className="p-3">
        <h1 className="truncate text-lg font-semibold text-gray-900 group-hover:text-gray-800">{title}</h1>
        <h4 className="truncate text-sm text-gray-900 group-hover:text-gray-800">{category}</h4>
        <Rating rating={rating} />
        <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
      </div>
    </a>
  );
};

export default CardItem;
