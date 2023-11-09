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
            <img src= {product_photos[0]}/>
            <h1>{offer?.price}</h1>
            <h1>{product_title}</h1>
            <h3>{product_description}</h3>
            {product_attributes && (
            <ul>{Object.values(product_attributes).map(attribute => <li key={attribute}>{attribute}</li>)}</ul>)} 
            <h5>{typical_price_range}</h5>
            <h5>{offer?.store_name}</h5>
            <p>{offer?.shipping}</p>
            <p>{offer?.product_condition}</p>
            {offerings && offerings.map((offering, index) => 
            <p key={index}>
                {offering.store_name} - {offering.price} - 
                <a href={offering.offer_page_url} target="_blank" rel="noopener noreferrer">BUY NOW</a>
            </p>)}
            
            <ReviewSection listingsId={product_id} />
           
        </div>
        
        </>
    )
    
}

export default DetailsPage