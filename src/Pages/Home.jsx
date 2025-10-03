import React, { useEffect, useState } from "react";
import { data } from "react-router";

const Home = () => {
  const [p, setP] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => console.log(data.id));
  }, []);

  return <div className="container mx-auto px-4 py-8"></div>;
};

export default Home;
