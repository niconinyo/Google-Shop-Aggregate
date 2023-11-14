import { Link } from 'react-router-dom'

export default function Card({ listingsData, updateDetails}) {
    console.log( updateDetails);
    return(
        <Link
            to={"/details"}
         onClick={() => updateDetails(listingsData)}>
        <div className="mrounded overflow-hidden shadow-lg ">
            <div className="bg-white shadow-md rounded-lg max-w-sm bg-sky-100 dark:border-gray-700 ">
                <figure className="px-5 pb-5 ">
                    <img className="rounded-t-lg p-8 py-5 w-full h-80 object-cover" src={listingsData.product_photos[0]}  />
                    <figcaption>
                    <h4 className="text-3xl font-bold text-cyan-900 dark:text-cyan-900 py-2">{listingsData.offer.price}</h4>
                        <h2 className="text-cyan-900 font-semibold text-xl tracking-tight dark:text-cyan-900 py-5 flex-1 truncate hover:text-clip">{listingsData.product_title}</h2>
                        <h3 className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-900 dark:hover:bg-cyan-800 dark:focus:ring-blue-800 ">{listingsData.offer.store_name}</h3>
                        
                    </figcaption>
                </figure>
            </div>
        </div>
        </Link>
    )
}