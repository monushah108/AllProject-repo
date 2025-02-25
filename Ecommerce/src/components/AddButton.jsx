import React from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/slices/cart";

export default function AddButton({id}) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(updateCart({id} ))}
      className="px-4 py-1 mt-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
    >
      Add To Cart
    </button>
  );
}
