import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import countryService from './services/countries'
import Searchbar from './components/Searchbar'

const App = () => {
  const [countryInfos, setCountryInfos] = useState([])
  const [searchbarValue, setSearchbarvalue] = useState('')

  useEffect(() => {
    countryService.getAllCountryInfos().then(initialCountries => {
      setCountryInfos(initialCountries)
    })
  }, [])

  const handleSearchbarChange = (event) => {
    setSearchbarvalue(event.target.value)
  }

  const q = searchbarValue.trim().toLowerCase()
  const filteredCountries = !q
    ? []
    : countryInfos.filter(c => c.name?.common?.toLowerCase().includes(q))

  const showCountry = (country) => {
    setSearchbarvalue(country)
  }

  return (
    <div>
      <Searchbar value={searchbarValue} onChange={handleSearchbarChange} />
      <Countries countries={filteredCountries} showCountry={showCountry} />
    </div>
  )
}

export default App