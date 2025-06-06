import CountriesByRegion from '@/components/countries/GetCountrysByRegion';
import React from 'react';


type Params = Promise<{continentId: string}>

export default async function CountriesPage({params}:{params:Params}) {
  const { continentId } = await params
   return <CountriesByRegion key={continentId} region={continentId} />
}

