import { useState, useEffect } from "react";
import products from "./products";
//3. Create a separate React component pulling in the data from an imported file 
//and using Array.sort(), sort the products in the array by their price in ascending order.



const ArraySort = () => {

    
    products.sort((a,b) => b.price-a.price);
    const SortedProd = products.map((prod) =>{

        return <div className="grid auto-cols-auto">
            <a class="block row-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
               <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.name}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">${prod.price}</p>
            </a>       
        </div>
    })
    
    return <div >
        <h2 className=" text-3xl pb-10 font-mono"> Price of our tech from highest price to lowest</h2>
        <div className="flex grid  space-y-3">
        {SortedProd}      
        </div>
    </div>
}

export default ArraySort;