import React, { useState } from 'react'
import { Link } from "react-router-dom";
import 'boxicons'
import AddButton from './AddButton';


export default function ProductCard({ title,category, images, price, brand, rating, id, description }) {
  const [like,setLike] = useState(false)
  
  return (
    <div key={id}>
    <div className="relative ">
      <Link to={`/detail/${id}`}>
        <img
          src={images[0]}
          alt=""
          className="rounded-md w-full max-h-[150px] object-contain bg-slate-400/20"
        />
      </Link>

      <button onClick={() => setLike(!like)} className="absolute right-4 top-3 w-[30px] h-[30px] p-[6px] rounded-full bg-white shadow-sm  focus:ring-violet-300 hover:text-white">
       { like ? <box-icon type='solid' color="#a855f7" size='18px' name='heart'></box-icon> :
        <box-icon
          color="#a855f7"
          size="18px"
          name="heart"
        ></box-icon>
        }
      </button>
    </div>
    <div className="p-2">
      <Link
        to={`/detail/${id}`}
        className="flex items-center justify-between font-bold "
      >
        {title} <p>${price} </p>
      </Link>
      <p className="font-semibold text-xs  my-2">
        {description.split(" ").splice(0, 15).join(" ") +
          "...."}
      </p>
      <p className="text-violet-500 font-bold text-xs">
        {rating} ★ ★ ★ ★
      </p>
      <div className="flex items-center justify-between">
        <p className="uppercase font-bold opacity-60 my-1 text-xs">
          #{brand ?? "secrete"}
        </p>
        
        <AddButton id={id} />
      </div>
    </div>

  </div>
  )
}