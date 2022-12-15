import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'

const CardsDetails = () => {

  let api = ``

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  let { id } = useParams(); 
  return (
    <div>
      The Details of the card are here
    </div>
  )
}

export default CardsDetails