import { IconSearch } from "@tabler/icons-react"
import axios from "axios"

const Location = ({locationInfo, setLocationInfo}) => {

    const hundleSubmit =(e)=>{
        e.preventDefault()
        const newLocationId = e.target.newLocation.value

        axios
        .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
        .then(({data}) => setLocationInfo(data))
        .catch((error) => console.log(error))
    }
    
  return (
    <section className="grid gap-5 place-content-center p-4">
        <form onSubmit={hundleSubmit}>
            <div className="text-center border-2 border-green2 grid grid-flow-col h-16">
                <input type="number" 
                name="newLocation" 
                placeholder="Type a location Id...." 
                className="bg-transparent text-white"
                required/>

                <button className="flex gap-2 bg-green1 text-white border-2 border-green2 place-content-center items-center" type="submit"> 
                <div className="invisible sm:visible">Search</div>
                <IconSearch/> 
                </button>
            </div>
        </form>
        <article className="text-center sm:border-2 sm:border-green2 p-4 grid gap-6">
            <h2 className="text-green2 ">WELCOME TO {locationInfo?.name}</h2>
            <ul className="invisible flex gap-10  text-gray1 text-[17px] sm:visible">
                <li>Type: {locationInfo?.type}</li>
                <li>Dimension: {locationInfo?.dimension}</li>
                <li>Population: {locationInfo?.residents.length}</li>
            </ul>
        </article>
    </section>
)
}
export default Location