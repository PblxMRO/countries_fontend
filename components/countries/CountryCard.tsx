import { useState } from "react";
import FlagComponent from "./Flag";
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
 

type CountryCardProps = {
  name: string,
  code: string,
  capital: string,
  population: string,
}

export default function CountryCard({name ,code, capital, population} : CountryCardProps) {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
        <div className="rounded bg-white shadow relative p-1 flex flex-col">
        <div className="bg-white relative p-1 flex flex-row items-center justify-between">
             <FlagComponent
                    countryCode={code}
             />
            <div className="text-white rounded p-2 w-1/2">
                 <h3 className="text-xl font-bold text-gray-600">{name}</h3>
            </div>
            <div className=" text-white rounded p-2">
                <button onClick={() => setExpanded(!expanded)}>
                        {expanded ? <FaArrowUp size={40} color="#1D77C0" /> : <FaArrowRight size={40} color="#1D77C0" />}
                 </button>
            </div>
        </div>
        {expanded && (
            <div className="expanded-content text-black p-2">
                <ul>
                    <li>Capital: {capital}</li>
                    <li>Población: {population} habitantes</li>
                    <li>...</li>
                </ul>
            </div>
           )}
         </div>  
     </>
    )
}