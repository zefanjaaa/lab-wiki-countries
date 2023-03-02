import countryData from './../countries.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails() {
  const [foundCountry, setFoundCountry] = useState(null);
   
    const [countries, setCountries] = useState([])
    const [fetching, setFetching] = useState(true)
    const { countryId } = useParams();
  
    //initial render
    useEffect(() => {
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((response) => {
          setCountries(response.data)
          setFetching(false)
      })
    },[countryId])



    
    
  useEffect(() => {
    const country2 = countries.find((twocountry) => {
    return twocountry.alpha3Code === countryId
    })
      if (country2) {
          setFoundCountry(country2)
      }
  }, [countryId,countries])
    
    
//   useEffect(() => {
//     const country = countryData.find((oneCountry) => {
//       return oneCountry.alpha3Code === countryId;
//     });

//     if (country) {
//       setFoundCountry(country);
//     }
//   }, [countryId]);
// console.log(countryId)

  return (
    <div>
          <h1> Country Details</h1>
          
      {!foundCountry && (
        <Link to="/">
          <p>How do you spell experience?</p>
        </Link>
      )}
      {foundCountry && (
        <>
          <h2>{foundCountry.name.common}</h2>
          <p>Capital:{foundCountry.capital}</p>
          <p>Area:{foundCountry.area}</p>
          {/* <p>Borders:{foundCountry.borders}</p> */}

         
                  {/* <p>Border</p>
                  {foundCountry.borders.map((yy, xx) => {
                   
                      const link = `/countries/${yy}`
                      return <li key={xx}><Link to={link}> {yy}  </Link></li> 
                  })} */}
                  <p>Country with API</p>
                  {countries.map((value) => (
                      <div key={value.alpha3Code}>
                          <h3>{value.name.common}</h3>
                          <p>Capital: {value.capital}</p>
                          <p>Area: {value.area}</p>
                      </div>
                  ))}
          <Link to="/">GO BACK</Link>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
