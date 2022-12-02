import React from "react";
import styles from './Cards.module.scss';



const Cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="col-4 position-relative">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          <div className={`${styles.badge} position-absolute badge bg-danger`} >{status}</div>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
