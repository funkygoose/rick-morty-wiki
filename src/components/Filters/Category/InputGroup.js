import React from "react";

const InputGroup = ({ total }) => {
  return (
    <div class="input-group mb-3">
      <select class="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>

        {[...Array(total).keys()].map((x) => {
          return <option value={x}>One</option>;
        })}
      </select>
    </div>
  );
};

export default InputGroup;
