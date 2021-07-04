import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="spinner"
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
