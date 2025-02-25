import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { fetchProducts, searchProduct } from '../store/slices/Product';
import { getAllCartItems } from '../store/slices/cart';

export default function Header() {
  const [show, setShow] = useState(false);
  const cartItem = useSelector(getAllCartItems);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [input,setInput] = useState('')
  const handleSearch = () => {
    
    if (input) {
      navigate(`/search`);
      dispatch(searchProduct({input}))

    }
  };
  useEffect(() => {
    dispatch(fetchProducts())
  
  },[dispatch])
  return (
    <header>
    <nav className="flex items-center justify-between border-b shadow-b py-3">
      <h1 className="font-semibold">
        <Link to="/">MyMart</Link>
      </h1>

      <div className="relative hidden md:block">
        <input
          type="text"
          className="bg-slate-200/40 font-nunito p-2 rounded-full w-[150px] md:w-[350px]"
          placeholder="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="absolute top-3 right-5"
          onClick={handleSearch}
          disabled={!input}
        >
          <box-icon color="black" size="15px" name="search"></box-icon>
        </button>
      </div>

      <div className="flex items-center gap-5">
        <div
          className="block md:hidden cursor-pointer"
          onClick={(e) => setShow(!show)}
        >
          <box-icon color="black" size="15px" name="search"></box-icon>
        </div>
        <button className="relative">
          <Link to="/cart">
            <box-icon
              color="#a855f7"
              size="20px"
              type="solid"
              name="shopping-bag"
            ></box-icon>
            {cartItem.length ? (
              <span className="absolute bottom-2 -translate-y-2 right-[0.5px] text-[12px] p-1 rounded-full bg-red-700 text-white "></span>
            ) : null}
          </Link>
        </button>
      </div>
    </nav>

    <div
      className={`bg-white p-3 shadow-lg w-full rounded-sm relative my-2 ${show ? "block" : "hidden"} md:hidden`}
    >
      <input
        type="text"
        className="bg-slate-200 font-nunito p-2 rounded w-full"
        placeholder="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="absolute top-5 right-5"
        onClick={handleSearch}
        disabled={!input}
      >
        <box-icon color="black" size="15px" name="search"></box-icon>
      </button>
    </div>
  </header>
  )
}
