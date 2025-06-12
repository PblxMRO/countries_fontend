"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import { redirect } from "next/navigation";

const PER_PAGE = 18;

type CountriesByRegionProps = {
    key: string, 
    region: string
 }

const CountriesByRegion = ({ key, region } : CountriesByRegionProps) => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  type CountryCardProps = {
    cca3: string,  
    name: { common: string},
    cca2: string,
    capital: string,
    population: string,
    languages: string,
    currency: string
  }

  

  useEffect(() => {
    const fetchCountries = async () => {
      try {
       const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/v3.1/region/${region}`
        );
        setCountries(response.data);
      } catch (err) {
        setError(`Error al obtener los datos." ${err}`);
      } finally {
  
      }
    };
   
    if (region) {
      fetchCountries();
    }
  }, [region]);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const paginatedCountries = countries.slice(startIndex, endIndex);
  const total = countries.length;
  const totalPages = Math.ceil(total/PER_PAGE)
  const pages = Array.from({length: totalPages}, (_, i) => i +1)
   
  
  if (error) {
       redirect('/Europe')
  } 

  return (
    <div>
        <div className="w-full max-w-9/10 justify-self-center flex justify-center p-3">
          <p key={key} className="text-sky-600 text-3xl" >Paises de {region === 'Europe' ? 'Europa': region === 'Americas' ? 'América' : region === 'Antarctic' ? 'Antártida' :region} </p>
          
        </div>
        <div className="w-full max-w-9/10 justify-self-center flex justify-center p-3">
             
        </div>
     <div className="w-full max-w-9/10 justify-self-center grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 bg-gray-200">
           {paginatedCountries.map((country: CountryCardProps) => (
            <CountryCard
              key={country.cca3}
              name= {country.name.common}
              code = {country.cca2}
              capital = {country.capital}
              population= {country.population}
            />
          ))}
       </div>
       {totalPages > 1 && (
       <div className="w-full max-w-9/10 justify-self-center flex justify-center p-4">
           {currentPage > 1 && (
            <button type="button" className="px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                  onClick={() => setCurrentPage(currentPage - 1)} 
              >&laquo;
              </button>
           )}
           {pages.map(currentPaginationPage =>(
            <button type="button" key={currentPaginationPage} className={`${currentPage === currentPaginationPage && 'font-black bg-gray-100'} px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
               onClick={() => setCurrentPage(currentPaginationPage)} 
            >{currentPaginationPage}</button>
           ))}
           {currentPage != totalPages && (
            <button type="button" className="px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0" 
                onClick={() => setCurrentPage(currentPage + 1)} 
             >&raquo;
            </button>
           )}
       </div>
       )}
     </div>
  );
};

export default CountriesByRegion;