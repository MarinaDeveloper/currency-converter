import React, {useEffect, useState} from 'react';
import Header from 'components/Header';
import Converter from 'components/Converter';

import getCurrencyRate from 'services/getCurrencyRate';

import './styles.scss';

const App = () => {
  const [rates, setRates] = useState({})

  useEffect(() => {
    getCurrencyRate().then(function (response) {
      setRates(response.data.rates);
    }).catch(function (error) {
      alert(error);
    });
  }, [])

  return (
    <div className='container'>
      {Object.keys(rates).length !== 0 ? (
        <>
          <Header course={rates}/>
          <Converter rates={rates}/>
        </>
      ) : (
        <div className='loading'>
          <div className="bounce bounce1"></div>
          <div className="bounce bounce2"></div>
          <div className="bounce bounce3"></div>
        </div>
      )}
    </div>
  );
}

export default App;