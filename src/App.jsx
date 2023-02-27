import { useState } from 'react'
import ArrayFilter from './components/ArrayFilter';
import ArrayReduce from './components/ArrayReduce';
import ArraySort from './components/ArraySort.jsx';
import ArrayMap from './components/ArrayMap';
import "./App.css";

function App() {

  const [componentToShow, setComponentToShow] = useState('filter');

  const arrayFilterHandler = () => {
    setComponentToShow('filter');
  }

  const arrayReduceHandler = () => {
    setComponentToShow('reduce');
  }

  const arraySortHandler = () => {
    setComponentToShow('sort');
  }

  const arrayMapHandler = () => {
    setComponentToShow('map');
  }


  return (
    <div className="App">

        
          <h1 className="flex justify-center text-3xl pt-10 font-mono"> Welcome to Tech Emporium!</h1>
          <h2 className="flex justify-center text-2xl pt-10 font-mono"> pick from our selection here!</h2>
          <h2 className="flex justify-center text-xl pt-10 font-mono"> use the buttons to see what we have!</h2>
        <div className='flex justify-around pt-20'>
          <button onClick={arrayFilterHandler} class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Items On Sale!</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
          <button onClick={arrayReduceHandler} class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Calculate Total</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
          <button onClick={arraySortHandler} class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Sorted items</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
          <button onClick={arrayMapHandler} class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">All items</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
        </div>

    

      <p className="flex justify-center pt-24">
        {componentToShow === 'filter' && <ArrayFilter />}
        {componentToShow === 'reduce' && <ArrayReduce />}
        {componentToShow === 'sort' && <ArraySort />}
        {componentToShow === 'map' && <ArrayMap />}
      </p>
    </div>



  )
}

export default App