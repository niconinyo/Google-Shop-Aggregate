import { useState, useEffect } from 'react'
import './styles.css'
import Gallery from '../Gallery'
import DetailsPage from '../DetailsPage'

function App() {

  const [listings, setListings] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const [detailsData, setDetailsData] = useState({})
  console.log(detailsData)

  useEffect(() => {
    async function getData() {
      // Since I have to add search params for the API I found URLSearchParams which allows for utility methods when working with api queries
      const params = new URLSearchParams({
        q: 'Programming',
      });
      // adding params to the endpoint
      const endpoint = `https://real-time-product-search.p.rapidapi.com/search?${params}`;
      
      // calling on the endpoint with the necessary headers
      const res = await fetch(endpoint, {
        // method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3b348ff6d3msh85a5ebcde5c743ap15ac87jsn1fea8af32b68',
          'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        },
      });
      const { data } = await res.json();
      setListings(data);
      // setIsLoading(false);
  
    }
    getData();
   
  }, []);
 
  return (
    <>
      
      <h1>Aggie</h1>

      <Gallery listings = {listings} updateDetails={setDetailsData} />
      {/* {isLoading ? (
        <p> Loading...</p>
      ) : (
        <img src={listings[0].product_photos[0]} />
      )} */}
      {/* {listings[0].product_photos[0] } */}
      {detailsData.product_id && <DetailsPage {...detailsData} />}
    </>
  )
}

export default App
