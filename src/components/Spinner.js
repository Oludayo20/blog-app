import React from "react";

function Spinner() {
  return (
    <div className="spinner-border text-primary mt-5 spinner" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner;
