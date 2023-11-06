import { useState, useEffect } from 'react'
import './styles.css'

function App() {
  useEffect(() => {
    async function getData() {
      // Since I have to add search params for the API I found URLSearchParams which allows for utility methods when working with api queries
      const params = new URLSearchParams({
        q: 'Programming',
        // country: "us",
        // language: "en"
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
      const data = await res.json();
      console.log(data);
    }
    getData();
  }, []);


  return (
    <>
      
      <h1>Aggie</h1>
      <p>Find the best price for you!</p>
      
    </>
  )
}

export default App
