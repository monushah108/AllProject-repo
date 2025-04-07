import "boxicons";
import productData from "../data/productData";
export default function Cards() {
  return (
    
    <div className="w-[500px] mt-12 m-auto">
      {productData.map((item) => {
        return (
          <div
            className="text-gray-500 flex items-center justify-center gap-5 p-5  border-b-2 border-dotted"
            key={item.id}
          >
            <div className="font-semibold">
              <div>
                <div className="text-xs  flex items-center gap-3 mb-4 ">
                  <p>
                    <box-icon name="food-tag" color="green"></box-icon>
                  </p>
                  <p className="rounded bg-gray-100 px-1 w-fit text-green-700 ">
                    <span className="align-middle ">
                      <box-icon name="fast-forward" color="green"></box-icon>
                    </span>
                    <span>15 mins</span>
                  </p>
                </div>
                <p className="text-black font-bold text-xl">
                  {item.product_title}
                </p>
                <p className="flex items-center ">
                  <img className="w-22" src="/start.avif" alt="rating" />
                  <span className="text-black">{item.product_rating}</span>
                </p>
              </div>
              <p className="font-bold text-black">{item.product_price}</p>
              <p>
                {item.product_content} -
                <span className="font-bold">...more</span>
              </p>
              <p className="flex items-center mt-3 space-x-2 *:cursor-pointer *:rounded-full *:border-gray-500  *:border-1   ">
                <span className="leading-0 p-2 text-center">
                  <box-icon name="bookmark" color="#6a7282"></box-icon>
                </span>
                <span className="leading-0 p-2 text-center">
                  <box-icon name="share" color="#6a7282"></box-icon>
                </span>
              </p>
            </div>
             <div>
              <img
                className="rounded-3xl w-[400px]"
                src={`/${item.product_img}`}
                alt={item.product_img}
              />
              <div className="m-auto px-5 flex items-center justify-center flex-col gap-2 relative bottom-[25px]">
                <button className="border rounded-xl w-full p-3 border-red-500 bg-pink-100 relative btn-plus cursor-pointer">
                  <p className="text-red-500 font-bold text-2xl  ">ADD</p>
                </button>
                <p className="font-semibold text-gray-400">customisable</p>
              </div>
            </div>
            
           
          </div>
        );
      })}
    </div>
  );
}
