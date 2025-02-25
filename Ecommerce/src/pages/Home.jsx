import React from 'react'
import Cards from '../components/Cards';
import Slider from '../components/Slider';
import Shimmer from '../components/Shimmer';
import { useSelector } from 'react-redux';
import { fetchErrorState, fetchLoadingState, getProductList } from '../store/slices/Product';

export default function Home() {
    const data = useSelector(getProductList)
    const isLoading = useSelector(fetchLoadingState)
    const isError = useSelector(fetchErrorState)
  return (
    <>
    <section className="pb-10 mt-5">
    <Slider  />
    
    <main className="pb-10 mt-10">
      <div>
        
        <div className="grid grid-cols-layout gap-3" >
         {isLoading ? <Shimmer /> : isError ? <h1>{isError}</h1> :
            data.map(({ title,category, images, price, brand, rating, id, description }) => {
                return (
                    <Cards
                     key={id}
                     category={category}
                     title={title}
                     images={images}
                     price={price}
                     brand={brand}
                     rating={rating}
                     id={id}
                     description={description} 
                     />
                   
                )
            })
         }
        </div>
      </div>
    </main>
  </section>
    </>
  )
}


