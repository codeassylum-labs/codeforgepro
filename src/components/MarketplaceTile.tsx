import React from 'react';

interface Props {
  title: string;
  creator: string;
  price: string;
  onClick?: () => void;
}

const MarketplaceTile: React.FC<Props> = ({ title, creator, price, onClick }) => (
  <div className="bg-white rounded-lg shadow-md p-5 transition-transform hover:scale-105 hover:shadow-xl cursor-pointer" onClick={onClick}>
    <h3 className="text-lg font-semibold text-[#1E88E5] mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-2">By {creator}</p>
    <span className="text-sm font-bold text-[#D81B60]">{price}</span>
  </div>
);

export default MarketplaceTile;
