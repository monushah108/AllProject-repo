import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { getAllCartItems } from '../store/slices/cart'

export default function Cart() {
  const getcartitems = useSelector(getAllCartItems)
  return (
    <main>
        { getcartitems.map(({id,title,brand,price,thumbnail,quantity}) => {
          
          return (
            <CartItem
            key={id}
            id={id}
            img={thumbnail}
            title={title}
            brand={brand}
            quantity={quantity}
            price={price}
           />
          ) 
        })
       

       } 
       <h1 className="flex items-center justify-between p-5 border-t">Total : 
        

            {
              <div className="total">
                $
                {getcartitems.reduce(
                  (accumulator, currentItem) =>
                    Math.floor(accumulator + currentItem.quantity * currentItem.price),
                  0
                )}
              </div>
            }

        
        </h1>
    </main>
  )
}
