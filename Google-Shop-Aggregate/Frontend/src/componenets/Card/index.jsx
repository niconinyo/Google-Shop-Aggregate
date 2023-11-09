import { Link } from 'react-router-dom'

export default function Card({ listingsData, updateDetails}) {
    console.log( updateDetails);
    return(
        <Link
            to={"/details"}
         onClick={() => updateDetails(listingsData)}>
         <figure>
            <img src={listingsData.product_photos[0]}  />
            <figcaption>
                <h2>{listingsData.product_title}</h2>
                <h3>{listingsData.offer.store_name}</h3>
                <h4>{listingsData.offer.price}</h4>
            </figcaption>
        </figure>
        </Link>
    )
}