import React from "react";

const House = ({ house }) => {
  return (
    <div className="text-left px-2">
      {house.imageUrl}

      <p>
        <strong>{house.address}</strong>
      </p>
      <p>{house.notes}</p>
    </div>
  );
};

export default House;
