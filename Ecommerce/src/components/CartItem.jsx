import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeItem } from '../store/slices/cart'

export default function CartItem({id,title,img,price,brand,quantity}) {
  const dispatch = useDispatch()
 
  return (
    <div key={id} className='flex items-center flex-col md:flex-row lg:flex-row gap-3 md:gap-5 my-5'>
      <img className='w-40 rounded-sm' src={img} alt="" />
      <div className='flex items-center justify-evenly md:justify-around w-full  gap-2 md:gap-5'>

        <p> <span className='font-bold uppercase text-xs text-slate-500/50'>{brand}</span> <br /> <span className='capitalize'> {title} </span></p>
       
      <div className='flex items-center justify-around gap-2 text-lg shadow rounded px-2'>
        <button onClick={() => dispatch( decreaseCartItemQuantity({id}))}>-</button>
        <p className='text-sm'>{quantity}</p>
        <button onClick={() => dispatch(increaseCartItemQuantity({id}))} >+</button>
      </div>
      <p className='font-semibold'>$ { quantity * price}</p>

      <button   onClick={() => {
            dispatch(removeItem({id}))
          }}>
      <box-icon size='xs' name='x'></box-icon>
      </button>
      </div>

    </div>
  )
}
