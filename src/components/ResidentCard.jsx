import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentURL}) => {

    const [residentInfo, setResidentInfo] = useState(null)
    const bgByStatus={
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500",
    }
    

    useEffect (() => {
        axios
        .get(residentURL)
        .then(({data}) => setResidentInfo(data))
        .catch((error) => console.log(error))
    },[])
  return (
    <article>
        <header className="relative border-2 border-green2">
            <img src={residentInfo?.image} alt="" />

            <div className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white p-1 px-2 border-2 border-green2">
                <div className={`h-4 aspect-square rounded-full ${bgByStatus[residentInfo?.status]}`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </header>
        <section className="border-2 border-green2 pt-4 grid gap-4 p-4">
            <h5 className="text-white text-xl line-clamp-1 font-bold">{residentInfo?.name}</h5>
            <ul className= "text-white grid gap-6">
                <li><span className="text-gray1">Species </span> {residentInfo?.species}</li>
                <li className="line-clamp-1 "><span className= " text-gray1">Origin </span> {residentInfo?.origin.name}</li>
                <li><span className="text-gray1">Times appear </span>{residentInfo?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard