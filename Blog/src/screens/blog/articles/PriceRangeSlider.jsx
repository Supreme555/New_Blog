import React, { useState } from 'react';

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setMaxPrice(value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        value={maxPrice}
        step="0.01"
        onChange={handlePriceChange}
      />
      <p>Price Range: ${minPrice} - ${maxPrice}</p>
    </div>
  );
};

export default PriceRangeSlider;
