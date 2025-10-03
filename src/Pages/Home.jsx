import React, { useEffect, useState } from "react";
import { data } from "react-router";

const Home = () => {
  const [ps, setP] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setP(data));
  }, []);
  console.log(ps);

  return (
    <div className="">
      <h1 className="text-3xl px-4 py-8 ">welcome home</h1>
      {ps.map((p) => (
        <h1 key={p.id}>{p.movie}</h1>
      ))}
    </div>
  );
};

export default Home;
