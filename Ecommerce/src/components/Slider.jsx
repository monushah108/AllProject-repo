import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProductList } from "../store/slices/Product";

export default function Slider() {
  const data = useSelector(getProductList);
  const ImageListText = data.map(({ images, description }) => ({
    images,
    description,
  }));
  const [index, setIndex] = useState(0);
  useEffect(() => {
    
     const timer = setInterval(() => {
        setIndex((pre) => (pre >= 7 ? 0 : pre + 1));
      }, 2500);

    return () => clearInterval(timer);
  });


  return (
    <>
      <main>
        <div
          className={`relative flex items-center justify-center  bg-slate-500/50`}
        >
          <div className="flex items-center justify-center">
            <img
              src={ImageListText.map((item) => item.images[0])[index]}
              alt="slider image "
              className="rounded-lg w-[250px]  h-[290px] md:h-[350px] lg:h-[450px] object-contain"
            />
            <p className=" text-black absolute bottom-2 text-center">
              {
                ImageListText.map((item) =>
                  item.description.split(" ").splice(0, 15).join(" ")
                )[index]
              }
            </p>
          </div>
        </div>
      
      </main>
    </>
  );
}
