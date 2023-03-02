import countryData from './../countries.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails(land) {
  const [foundCountry, setFoundCountry] = useState(null);
  const [complicated, setComplicated] = useState(countryData);

  const { countryId } = useParams();

  useEffect(() => {
    const country = countryData.find((oneCountry) => {
      return oneCountry.alpha3Code === countryId;
    });

    if (country) {
      setFoundCountry(country);
    }
  }, [countryId]);


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

         
                  <p>Border</p>
                  {foundCountry.borders.map((yy, xx) => {
                   
                      const link = `/countries/${yy}`
                      return <li key={xx}><Link to={link}> {yy}  </Link></li> 
                  })}

          <Link to="/">GO BACK</Link>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
