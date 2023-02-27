// Create a separate React component pulling in the data from an imported file
// and using Array.map(), render a list of all the product names on the website.
import products from "./products";



const ArrayMap = () => {
    return(
        <div>
            <p className="flex justify-center text-xl pt-10 font-mono">The Products avaiable today!</p>

            <div className="flex flex-row space-x-2">
            {products.map((prod) => {
                   return <div>

                   <a class="block row-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.name}</h5>
                   <p class="font-normal text-gray-700 dark:text-gray-400">${prod.price}</p>
                   </a>
                   </div>
            })}
            </div>
        </div>
    )
    
    }
    export default ArrayMap;