import React from "react";

const FilterBTN = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="btn btn-outline-primary" for="flexRadioDefault1">
          Single toggle
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="btn btn-outline-primary" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
