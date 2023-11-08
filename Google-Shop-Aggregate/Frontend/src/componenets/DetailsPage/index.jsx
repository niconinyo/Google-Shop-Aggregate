export default function DetailsPage({offer, product_title, product_description, product_attributes, typical_price_range, price, store_name, shipping, product_condition, product_photos }) {
   console.log(product_attributes)
    return (
        <>
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

        
        </>
    )
}