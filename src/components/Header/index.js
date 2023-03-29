import React from 'react';
import CurrencyRate from 'components/CurrencyRateUAH';

import './styles.scss';

const Header = ({course}) => {
  return (
    <header className='header'>
      <CurrencyRate currency={"USD"} value={(1 / course["USD"]).toFixed(2)} />
      <CurrencyRate currency={"EUR"} value={(1 / course["EUR"]).toFixed(2)} />
    </header>
  )
}

export default Header;