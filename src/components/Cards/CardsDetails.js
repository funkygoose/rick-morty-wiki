import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardsDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return <div>The Details of the card are here</div>;
};

export default CardsDetails;
