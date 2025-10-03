import { Clock } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Card = ({ p }) => {
  const {id, imdbRating, img, movie, releaseYear, runtime } = p;
  console.log(p);
  return (
    <div className=" mt-8 rounded-2xl   border border-[#925a33] p-4 overflow-hidden">
      <div className="w-[200px] ">
        <img className="" src={img} alt="" />
      </div>

      <div className="mt-5 w-fit">
        <div className="flex items-center  gap-5">
          <h1 className="text-xl font-medium"> {movie} </h1>
          <p>{releaseYear} </p>
        </div>
        <p className="flex gap-2.5">
          <Clock></Clock> {runtime} min
        </p>
        <p>Ratting: {imdbRating}/10 </p>
      </div>
      <Link to={`"/details/${id}`} className="btn bg-[#343300]  text-[#cdcdb2]">Details</Link>
    </div>
  );
};

export default Card;
