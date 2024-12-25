import { LuCoffee } from "react-icons/lu";
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from "react";
import Bennar from "./components/Bennar";
import Coffee from "./components/Coffee";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
    <Bennar></Bennar>
    <div className='flex flex-col items-center gap-3 mt-10'>
    <p> --- Sip & Sevor --- </p>
      <h1 className='text-4xl text-[#522d20] dancing-script'>Our Popular Products </h1>
      <Link to={'/addCoffee'}>
      <button className='flex items-center py-1 px-4 rounded-md border-2 border-[#522d20] bg-[#ce943e] text-[#f3f0f0] dancing-script
      hover:bg-[#a88044] hover:border-[#522d20]'> Add Coffee <LuCoffee className="text-[#522d20] ml-2"></LuCoffee></button>
      </Link>
    </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mx-5 lg:mt-10 lg:mx-52'>
        {
          coffees.map(coffee => <CoffeeCard 
          key={coffee._id} coffee={coffee} 
          coffees={coffees} setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
      <Coffee></Coffee>
    </>
  )
}

export default App
