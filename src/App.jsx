import axios from "axios"
import { useEffect, useState } from "react"
import { getRandomNumber } from "./helpers/random"
import Location from "./components/Location"
import ResidentList from "./components/ResidentList"

function App() {
  const [locationInfo, setLocationInfo] = useState(null)
  
  
  useEffect(()=>{
    const randomDimension = getRandomNumber(126)

    axios
    .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
    .then(({data})=> setLocationInfo(data))
    .catch((error)=> console.log(error))
  },[])

  return (
    <main className="font-firaCode bg-[url('/imageBackground.png')] min-h-screen bg-cover">
      <div className="grid place-content-center">
        <img className="w-[500px]" src="/imagePortal.png" alt="" />
        <img className="w-[500px] absolute left-1/2 -translate-x-1/2 top-10" src="/imageLogo.png" alt="" />
      </div>
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      <ResidentList residents={locationInfo?.residents ?? []} />
    </main>
  )
}

export default App
