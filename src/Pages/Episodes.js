import React, { useState, useEffect } from "react";

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  console.log(info);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-3">
          Episode : 
          <span className="text-primary"> {name === "" ? "unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "unknown" : air_date}
        </h5>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Episodes;
