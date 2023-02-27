import products from "./products";
/*4. Create a separate React component pulling in the data from an 
imported file and using Array.filter(), create a new array that only includes the products that are on sale. 
Render the sale products in a list on the website.*/
const prodOnSale = products.filter(prod => prod.onSale)

const ArrayFilter = () => {

    return(
        <div>
            <h2 className ="text-xl">stuff on sale: </h2>
            <div className="flex flex-row space-x-2">
            {prodOnSale.map((prod =>{
                return(
                    <div > 
                        <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.name}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">${prod.price}</p>
                        </a>
                    </div>
                )
                
            
        }))}
            </div>
        </div>
        
    )
}

export default ArrayFilter;