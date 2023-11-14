import { useState, useEffect } from "react"
import ReviewSection from "../ReviewSection";

function DetailsPage({product_id, offer, product_title, product_description, product_attributes, typical_price_range, price, store_name, shipping, product_condition, product_photos, props, id }) {
   

   const [offerings, setOfferings] = useState();
   useEffect(() => {
   async function getOfferings () {
    const url = `https://real-time-product-search.p.rapidapi.com/product-offers?product_id=${product_id}&country=us&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3b348ff6d3msh85a5ebcde5c743ap15ac87jsn1fea8af32b68',
            'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data.data); 
        setOfferings(data.data)
    } catch (error) {
        console.error(error);
    }
   }
getOfferings() 
},[product_id]);

    return (
        <>
        <div>
            <div className=" flex justify-center">
            <img className="w-4/12" src= {product_photos[0]}/>
            </div>
            <h1 className="text-3xl font-bold text-cyan-900 dark:text-cyan-900 py-2">{offer?.price}</h1>
            <h1 className="text-cyan-900 font-bold text-xl tracking-tight dark:text-cyan-900 py-5 flex-1">{product_title}</h1>
            <h3 className="text-cyan-900 text-md dark:text-cyan-900 py-10 flex-1">{product_description}</h3>
            {product_attributes && (
            <ul className="text-cyan-900 font-bold text-md dark:text-cyan-900 flex-1">{Object.values(product_attributes).map(attribute => <li key={attribute}>{attribute}</li>)}</ul>)} 
            <h5 className="text-cyan-900 font-bold text-md dark:text-cyan-900 flex-1">{offer?.store_name}</h5>
            <p className="text-cyan-900 font-bold text-md dark:text-cyan-900 flex-1">{offer?.shipping}</p>
            <p className="text-cyan-900 font-bold text-md dark:text-cyan-900 flex-1">{offer?.product_condition}</p>
            <div className="flex justify-center items-center ">
                <div className="w-2/6 text-sm font-medium text-gray-900 bg-white border border-cyan-900  rounded-lg dark:bg-sky-100 dark:border-cyan-900 dark:text-cyan-900 font-semibold">
                    {offerings && offerings.map((offering, index) => 
                        <p key={index} className="w-full px-4 py-3 border-b border-cyan-900 rounded-t-lg dark:border-cyan-900" >
                        {offering.store_name} - {offering.price} - 
                        <a href={offering.offer_page_url} target="_blank" rel="noopener noreferrer" className="text-white bg-cyan-900 dark:hover:bg-cyan-800 dark:focus:ring-blue-800 focus:ring-4 font-medium rounded-lg text-xs px-1 py-1 text-center ">BUY NOW</a>
                        </p>)}
                </div>
            </div>
            <ReviewSection listingsId={product_id} />
           
        </div>
        
        </>
    )
    
}

export default DetailsPage