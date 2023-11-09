import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './styles.css'
import Gallery from '../Gallery'
import DetailsPage from '../DetailsPage'
import HomePage from '../HomePage'
import SearchPage from '../SearchPage';

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
      
  <nav className="bg-gray-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link to="/">
            <h2 className="text-white font-bold text-2xl">Aggy</h2>
          </Link>
        </div>
        <div className="flex-grow">
          <ul className="flex justify-end text-gray-300 text-lg font-medium">
            <li>
              <Link to="/search">
                <h4 className="px-3 py-2 hover:text-white">Search for listings!</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

      <Routes>
        <Route path="/" element={
          <HomePage
            listings={listings}
            setDetailsData={setDetailsData}
        />}
      />
      <Route path="/search" element={<SearchPage setDetailsData={setDetailsData}/>} />
      <Route path ="/details" element={<DetailsPage {...detailsData} />} />
      </Routes>
    </>
  )
}

export default App
