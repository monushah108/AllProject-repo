import React, { lazy, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchErrorState,
  fetchLoadingState,
  getProductList,
} from "../store/slices/Product";
import AddButton from "../components/AddButton";

const OptionalProducts = lazy(() => import("../components/OptionalProducts"));
const Review = lazy(() => import("../components/Review"));

export default function ProductDetail() {
  const [img, setImg] = useState("");
  const products = useSelector(getProductList);
  const { cartId } = useParams();
  const getDetail = products.filter(({ id }) => id == cartId);
  const isLoading = useSelector(fetchLoadingState);
  const isError = useSelector(fetchErrorState);
  const categoryProduct = products.filter(
    (item) => item.category === getDetail[0].category
  );

  return (
    <>
      <section className="my-10">
        {isError ? (
          <h1>please cheack your internet connection </h1>
        ) : isLoading ? (
          <h1>...loading</h1>
        ) : (
          getDetail.map(
            ({
              images,
              tags,
              stock,
              price,
              rating,
              brand,
              availabilityStatus,
              title,
              description,
              discountPercentage,
              id,
              category,
              reviews,
              warrantyInformation,
              minimumOrderQuantity,
              returnPolicy,
            }) => {
              return (
                <div key={id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative ">
                      <div className="bg-slate-400/20">
                        <img
                          className="m-auto max-h-[300px]"
                          src={
                            img ||
                            (images.length > 0 ? images[0] : "placeholder.jpg")
                          }
                          alt=""
                        />
                      </div>
                      <div className="flex items-center my-3 gap-3 overflow-x-auto snap-x">
                        {!images
                          ? null
                          : images.map((src, i) => (
                              <img
                                className="w-28 border rounded p-2 bg-slate-400/20"
                                src={src}
                                key={i}
                                onClick={() => setImg(src)}
                              />
                            ))}
                      </div>
                    </div>

                    <div>
                      <h1 className="font-semibold text-xl md:text-2xl">
                        {title}
                      </h1>
                      <h1 className="font-semibold text-lg flex items-center gap-5 my-1">
                        ${price}{" "}
                        <span className="text-slate-400">
                          {discountPercentage}%
                        </span>
                        {availabilityStatus == "Low Stock" ? (
                          <span className="text-red-500 font-semibold text-xs">
                            {availabilityStatus}
                          </span>
                        ) : (
                          <span className="text-green-500 font-semibold text-xs">
                            {availabilityStatus}
                          </span>
                        )}
                      </h1>
                      <p className="text-violet-500 font-bold text-sm">
                        ({rating}) ★ ★ ★ ★
                      </p>
                      <p className="my-4 ">{description}</p>
                      <b>
                        {brand} stockIn:{stock}
                      </b>
                      <p className="font-bold text-xs text-gray-500 mb-4">
                        Category: {category}
                      </p>
                      <p className="my-2">
                        {tags.map((e, i) => (
                          <span
                            className="rounded shadow px-3 py-1 m-1 "
                            key={i}
                          >
                            #{e}
                          </span>
                        ))}
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <AddButton id={id} />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-center  gap-4 flex-wrap border-b py-5 *:flex-grow *:text-center">
                    <div>
                      <box-icon
                        color="#a855f7"
                        size="lg"
                        type="solid"
                        name="truck"
                      ></box-icon>
                      <h1 className="font-semibold font-poppins">
                        free shipping
                      </h1>
                      <p className="text-sm">
                        On all orders of $ 150 {warrantyInformation}
                      </p>
                    </div>
                    <div>
                      <box-icon
                        color="#a855f7"
                        size="lg"
                        name="revision"
                      ></box-icon>
                      <h1 className="font-semibold font-poppins">
                        {minimumOrderQuantity}/7 support
                      </h1>
                      <p className="text-sm"> Get help when you need it</p>
                    </div>
                    <div>
                      <box-icon
                        color="#a855f7"
                        size="lg"
                        name="archive-out"
                      ></box-icon>
                      <h1 className="font-semibold font-poppins">
                        100% money back
                      </h1>
                      <p className="text-sm">{returnPolicy}</p>
                    </div>
                  </div>

                  <div className="my-4 py-4">
                    <h1 className="italic font-semibold text-xs">
                      Some Product you Like :
                    </h1>
                    <Suspense fallback="...laoding optional">
                      {categoryProduct.map(
                        ({
                          title,
                          discountPercentage,
                          price,
                          images,
                          rating,
                          description,
                          id,
                        }) => {
                          return (
                            <OptionalProducts
                              key={id}
                              id={id}
                              title={title}
                              discountPercentage={discountPercentage}
                              price={price}
                              images={images}
                              rating={rating}
                              description={description}
                            />
                          );
                        }
                      )}
                    </Suspense>
                  </div>
                  <div className="mt-10 border-b py-3 flex items-center justify-center ">
                    <div className="w-10/12">
                      <h1 className="text-xl font-semibold font-nunito">
                        Reviews
                      </h1>
                      <Suspense fallback="...laoding review">
                        {reviews && reviews.length > 0 ? (
                          reviews.map(
                            (
                              { reviewerName, comment, date, rating },
                              index
                            ) => (
                              <Review
                                key={index}
                                reviewerName={reviewerName}
                                comment={comment}
                                date={date}
                                rating={rating}
                                id={index}
                              />
                            )
                          )
                        ) : (
                          <p>No reviews yet</p>
                        )}
                      </Suspense>
                    </div>
                  </div>
                </div>
              );
            }
          )
        )}
      </section>
    </>
  );
}
