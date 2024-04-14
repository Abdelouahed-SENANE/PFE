import React, { useState } from 'react';

const PriceRangeInput = ({setFilters}) => {
  const [minVal, setMinVal] = useState('');
  const [maxVal, setMaxVal] = useState('');

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
        setMinVal(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
        setMaxVal(value);
    }
  };
  const handleClickPrices = () => {
    setFilters((prevFilters) => ({
        ...prevFilters,
        minPrice: minVal,
        maxPrice: maxVal,
    }));
    setMaxVal('')
    setMinVal('')
  }
  return (
    <div className='flex items-center gap-2 justify-center'>
      <input
        type="text"
        value={minVal}
        name='minPrice'
        className='block p-2 max-w-[120px] border-2 outline-none rounded-md focus:border-primary transition-all focus:ring-4 focus:ring-primary/20'
        placeholder='Min.'
        onChange={handleMinPriceChange}
      />
    <div className='mx-2 text-gray-500 text-sm'>
        To
    </div>
      <input
        type="text"
        name='maxPrice'
        value={maxVal}
        className='block p-2 max-w-[120px] border-2 outline-none rounded-md focus:border-primary transition-all focus:ring-4 focus:ring-primary/20'
        placeholder='Max.'
        onChange={handleMaxPriceChange}
      />
          <div className='w-full'>
        <button className='bg-primary block w-full rounded-sm text-white py-2' onClick={handleClickPrices}>Set</button>
    </div>
    </div>

    
  );
};

export default PriceRangeInput;
