import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'red' }}>Name: {name.common}</h3>

            <img style={{ height: '200px', width: '100%' }} src={flags.png} alt="" />

            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}> Add Flag</button >

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have Visited this country' : 'I want to visit'}
            <hr />

            <CountryDetail>
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            </CountryDetail>
        </div >
    );
};

export default Country;