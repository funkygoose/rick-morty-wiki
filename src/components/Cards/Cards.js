import React from "react";

const Cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image } = x;
      return (
        <div key={id} className="col-4">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="">{name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
