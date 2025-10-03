// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../Componenet/Card";

const Home = () => {
  // const [ps, setP] = useState([]);

  // useEffect(() => {
  //   fetch("./Data.json")
  //     .then((res) => res.json())
  //     .then((data) => setP(data));
  // }, []);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="max-w-11/12 mx-auto">
      <h1 className="text-3xl py-8 ">welcome home</h1>
      <div className="grid grid-cols-2 gap-6 ">
        {data.map((p) => (
          <Card key={data?.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
