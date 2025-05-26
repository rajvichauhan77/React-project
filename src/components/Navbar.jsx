import React from "react";

const Navbar = () => {
    return(

        <>
            <div>
             <div className="shadow p-3">
             <div className="max-w-7xl mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Shop-Store</h1>
                    <div className='flex gap-3'>

                <button  className='py-1 px-4 rounded-2xl border hover:bg-slate-50'>Cart: 👜</button>

                <button className='group relative'>
                    <img className='w-10 rounded-full' src="" alt="" />
                    <div  className="absolute end-0  group-hover:block z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Name</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Email</a>
                        </li>
                        <li>
                            <a   className="block px-4 py-2 hover:bg-red-800 bg-red-600 dark:hover:text-white">Logout </a>
                        </li>
                      
                        </ul>
                    </div>
                </button>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Navbar