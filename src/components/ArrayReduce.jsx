import products from "./products";

const ArrayReduce = () => {
//calculate total cost of products from productsjsx

const totalPrice = products.reduce((accumulator, products) => {
    return products.price + accumulator ;
}, 0)


return(
        <div classname="" >
            <div >
            <a  class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total cost of all items</h5>
            <p class="font-normal text-xl dark:text-white">{totalPrice}$</p>
            </a>

            </div>
            <h2 className="flex justify-center text-xl pb-10 font-mono"> The Items:</h2>
            <div className="flex flex-row space-x-7">
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

export default ArrayReduce;