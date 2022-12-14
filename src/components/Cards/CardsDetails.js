import React from 'react';
import {useParams} from 'react-router-dom'

const CardsDetails = () => {

  let { id } = useParams(); 
  return (
    <div>
      The Details of the card are here
    </div>
  )
}

export default CardsDetails