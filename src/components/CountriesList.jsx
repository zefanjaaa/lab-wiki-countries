import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

function CountriesList(props) {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        setCountries(props.countries)
    }, [props.countries]);
console.log(countries)
    return (
        <div>
            <h1>List of countries</h1>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code} className='country'>
                        <h3>
                            <Link to={`/countries/${country.alpha3Code}`}>
                            {country.name.common} 
                            </Link> 
                        </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList