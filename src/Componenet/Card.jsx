import { Clock } from "lucide-react";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-gray-300 mt-8 rounded-2xl p-4 overflow-hidden">
      <div className=" ">
        <img className="" src={data.img} alt="" />
      </div>

      <div className="mt-5">
        <div className="flex items-center  gap-5">
          <h1 className="text-2xl font-medium"> {data.movie} </h1>
          <p>{data.releaseYear} </p>
        </div>
        <p className="flex gap-2.5">
          <Clock></Clock> {data.runtime} min
        </p>
        <p>{data.imdbRating}/10 </p>
      </div>
    </div>
  );
};

export default Card;
