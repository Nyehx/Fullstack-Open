import Weather from "./Weather"

const Country = ({ countryInfo }) => {
  if (!countryInfo) return null

  return (
    <div>
      <h1>{countryInfo.name.common}</h1>
      <p>Capital: {countryInfo.capital?.[0] ?? 'N/A'}</p>
      <p>Area: {countryInfo.area}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.values(countryInfo.languages ?? {}).map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>
      <img src={countryInfo.flags.png} alt={`Flag of ${countryInfo.name.common}`} />
      
      {console.log(countryInfo.capital[0])}
      <Weather capital={countryInfo.capital[0]}/>
    </div>
  )
}

const Countries = ({ countries, showCountry }) => {
  if (countries.length >= 10) {
    return <p>Too many countries, please specify your search</p>
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map(c => <li key={c.cca3}>{c.name.common}<button onClick={() => showCountry(c.name.common)}>{"Show"}</button></li>)}
      </ul>
    )
  }

  if (countries.length === 1) {
    return <Country countryInfo={countries[0]} />
  }

  return <p>Country not found</p>
}

export default Countries