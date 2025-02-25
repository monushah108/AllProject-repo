import React from "react";
import { Link } from "react-router-dom";

export default function OptionalProducts({
  title,
  discountPercentage,
  price,
  images,
  rating,
  description,
  id,
}) {
  return (

    <div>
      <Link
      key={id}
        to={`/detail/${id}`}
        className="flex items-center gap-4 border-b hover:bg-white/20"
      >
        
        <img className="w-20" src={images[0]} alt={`${price} image`} />
        <div>
          <h1 className="font-semibold">{title}</h1>
          <div className="flex items-center gap-3 text-sm">
            ${price}
            <span className="text-slate-400">{discountPercentage}%</span>
            <p className="text-violet-500 font-bold ">({rating}) ★ ★ ★ ★</p>
          </div>
          <p className="text-xs">
            {description.split(" ").splice(0, 15).join(" ") + "...."}
          </p>
        </div>
      </Link>
    </div>
  );
}
