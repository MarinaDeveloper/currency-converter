import React from 'react';
import './styles.scss';

const CurrencyRateUAH = ({currency, value}) => {
  return (
    <div className='currency-pair'>
      <div>{currency}/UAH</div>
      <div>{value}</div>
    </div>
  )
}

export default CurrencyRateUAH;