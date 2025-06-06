import Link from 'next/link'
import React from 'react'

export const Menu = () => {
  return (
    <>
    <Link 
        key={'Europe'}
        href={`/Europe`}
        className='text-amber-50 hover:text-blue-950 font-bold p-2'
     >Europa</Link>
     <Link 
        key={'Asia'}
        href={`/Asia`}
        className='text-amber-50 hover:text-blue-950 font-bold p-2'
     >Asia</Link>
      <Link 
        key={'Africa'}
        href={`/Africa`}
        className='text-amber-50 hover:text-blue-950 font-bold p-2'
     >Africa</Link>
      <Link 
        key={'Americas'}
        href={`/Americas`}
        className='text-amber-50 hover:text-blue-950 font-bold p-2'
     >América</Link>
      <Link 
        key={'Oceania'}
        href={`/Oceania`}
        className='text-amber-50 hover:text-blue-950 font-bold p-2'
     >Oceanía</Link>
     <Link 
        key={'Antarctic'}
        href={`/Antarctic`}
        className='text-amber-50 hover:text-blue-950 font-bold p-2'
     >Antártida</Link>
    </>
     
  )
}
