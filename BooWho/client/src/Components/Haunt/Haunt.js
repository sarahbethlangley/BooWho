import React from "react";

const Haunt = ({ haunt }) => {
  return (
    <div className="text-left px-2">
      <p>
        <strong>{haunt.address}</strong>
      </p>
      <p>{haunt.notes}</p>
    </div>
  );
};

export default Haunt;
