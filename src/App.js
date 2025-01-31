import countriesData from './countries.json'
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import ErrorPage from './components/ErrorPage';
import { useEffect, useState } from 'react';

function App() {

  // const apiURL= 'https://ih-countries-api.herokuapp.com/countries'

  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data)
        setFetching(false)
    })
  },[])
  return (
    <div className="App">
     
      <NavBar />
      {/* <CountriesList />
      <CountriesList countries={countriesData} /> */}
      <Routes>
        <Route path='/' element={<CountriesList countries={countriesData} />} />
        <Route path= '/countries/:countryId' element={<CountryDetails country={countriesData} />} /> 
        {/* <Route path={`/countries/${countryId}`} element={<CountryDetails countries={countriesData} />} />  */}
        {/* `/customers/${this.props.item.Id}` */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
