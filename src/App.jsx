import { useState } from 'react'
import './App.css'
import PostalCodeInput from './components/PostalCodeInput/PostalCodeInput'
import LocationInfo from './components/LocationInfo/LocationInfo'
function App() {
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState(null);

  return (
    <>
    <PostalCodeInput setPostalCode={setPostalCode} setCountry={setCountry}/>
     <LocationInfo  postalCode={postalCode} country={country} />
    </>
  )
}

export default App
