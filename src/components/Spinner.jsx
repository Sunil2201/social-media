import React from "react";
import { ClipLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="spinnerContainer">
      <ClipLoader color="#1d9bf0" size={45} speedMultiplier={1} />
    </div>
  );
}

export default Spinner;
