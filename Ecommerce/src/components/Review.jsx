import React from "react";

export default function Review({ reviewerName, comment, date, rating ,id}) {
  return (
    <div className="my-5" key={id}>
      <div className="flex items-center gap-2">
        <box-icon
          color="#94a3b8"
          size="md"
          type="solid"
          name="user-circle"
        ></box-icon>
        <div className="text-slate-500  text-xs font-semibold capitalize">
          <p className="flex items-center gap-2">
            <span>helpfull</span>
            <span>
              <box-icon size="xs" name="like"></box-icon>
              {rating}
            </span>
          </p>
          <p className=" text-slate-500">{reviewerName}</p>
          <p className="text-black">comment : {comment}</p>
        </div>
      </div>
    </div>
  );
}
