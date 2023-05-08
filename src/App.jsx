import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='m-12'>
      <h3 className='text-4xl text-purple-600 font-bold text-center my-20'>Coffee Store {coffees.length}</h3>
      <div className='grid md:grid-cols-2 gap-2'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />)
        }
      </div>
    </div>
  )
}

export default App
