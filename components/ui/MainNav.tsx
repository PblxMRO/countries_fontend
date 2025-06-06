import React from 'react';
import { Menu } from './Menu';


export default async function MainNav() {
 
  return (
    <header className="px-10 py-5 p-2 bg-sky-600 flex flex-col md:flex-row justify-between ">
        <div className="flex justify-center">
            <p className="text-amber-50 text-3xl">Paises del Mundo</p>
        </div>
        <nav className="flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0">
           <Menu />
        </nav>
    </header>
  )
}