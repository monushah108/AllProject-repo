import React from "react";
import { useSelector } from "react-redux";
import { fetchErrorState, fetchLoadingState, getFilterProduct, getSearchQuery } from "../store/slices/Product";
import ProductCard from "../components/Cards";
import Shimmer from "../components/Shimmer";

export default function Search() {
  const searchProduct = useSelector(getFilterProduct);
    const isLoading = useSelector(fetchLoadingState)
    const isError = useSelector(fetchErrorState)
  const searchQuery = useSelector(getSearchQuery)
  return (
    <>
      <main className="mt-10">
        {!searchQuery  ? null : <h1 className='font-semibold text-xl'>Your Search Query : {searchQuery}</h1>}
      
        <div className="grid grid-cols-layout gap-3 mt-5">
          {isError ? (
          <h1 className="text-center font-bold text-sm">Check your interent connection!!</h1>
        )  : isLoading ? <Shimmer /> : !searchProduct.length ? (
            <h1 className="text-xl font-semibold text-center ">
              NO DATA Found
            </h1>
          ) : (
            searchProduct.map(
              ({ title, images, rating, price, brand, description, id }) => {
                return (
                  <ProductCard
                    key={id}
                    title={title}
                    images={images}
                    price={price}
                    brand={brand}
                    rating={rating}
                    id={id}
                    description={description}
                  />
                );
              }
            )
          )}
        </div>
      </main>
    </>
  );
}
