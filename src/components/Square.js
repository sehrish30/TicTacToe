import React, { useState } from 'react';

const Square = ({ value, onClick, iswinningSquare }) => {
  return (
    <button
      className="square"
      type="button"
      onClick={onClick}
      style={{ fontWeight: iswinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
