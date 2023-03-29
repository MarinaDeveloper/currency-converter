import React, { useState } from 'react';
import './styles.scss';

const Converter = ({rates}) => {
  const currencyRates = {...rates, 'UAH': 1};

  const [selectFrom, setSelectFrom] = useState("USD");
  const [selectTo, setSelectTo] = useState("UAH");
  const [inputFrom, setInputFrom] = useState(1);
  const [inputTo, setInputTo] = useState(
    (currencyRates[selectTo] / currencyRates[selectFrom]).toFixed(2)
  );

  const handleChangeSelectFrom = (e) => {
    const newSelectFrom = e.target.value;
    setSelectFrom(newSelectFrom);
    setInputTo(
      ((currencyRates[selectTo] / currencyRates[newSelectFrom]) *
        inputFrom).toFixed(2)
    );
  };

  const handleChangeSelectTo = (e) => {
    const newSelectTo = e.target.value;
    setSelectTo(newSelectTo);
    setInputTo(
      ((currencyRates[newSelectTo] / currencyRates[selectFrom]) *
        inputFrom).toFixed(2)
    );
  };

  const handleChangeInputFrom = (e) => {
    const newValueFrom = e.target.value;
    setInputFrom(newValueFrom);
    setInputTo(
      ((currencyRates[selectTo] / currencyRates[selectFrom]) *
        newValueFrom).toFixed(2)
    );
  };

  const handleChangeInputTo = (e) => {
    const newValueTo = e.target.value;
    setInputTo(newValueTo);
    setInputFrom(
      ((currencyRates[selectFrom] / currencyRates[selectTo]) *
        newValueTo).toFixed(2)
    );
  };

  return (
    <section className='converter-section'>
      <h1>Converter.ua - simplify your finances!</h1>
      <div className='converter-wrapper'>
        <div className='input-block'>
          <input type='number' min="0" value={inputFrom} onChange={handleChangeInputFrom}/>
          <select value={selectFrom} onChange={handleChangeSelectFrom}>
            {Object.keys(currencyRates).map(key => (
              <option value={key} key={key}>{key}</option>
            ))}
          </select>
        </div>
        <div className='input-block'>
          <input type='number' min="0" value={inputTo} onChange={handleChangeInputTo}/>
          <select value={selectTo} onChange={handleChangeSelectTo}>
            {Object.keys(currencyRates).map(key => (
              <option value={key} key={key}>{key}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}

export default Converter;