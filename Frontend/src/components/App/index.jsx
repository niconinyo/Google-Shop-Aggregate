import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './styles.css'
import Gallery from '../Gallery'
import DetailsPage from '../DetailsPage'
import HomePage from '../HomePage'
import SearchPage from '../SearchPage';
import OfferSection from '../OfferSection';
import AuthFormPage from '../AuthFormPage';

const RAPIDAPI_KEY = import.meta.env.VITE_APP_RAPIDAPI_KEY


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
          'X-RapidAPI-Key': `${RAPIDAPI_KEY}`,
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
      
  <nav className="bg-white dark:bg-cyan-900 fixed w-full z-20 top-0 left-0">
    <div className="max-w-screen-xl flex justify-between items-center mx-auto p-2 h-15">
        <div className="flex-shrink-0">
          <Link to="/">
            <h2 className="text-white font-bold text-3xl flex ">Aggy</h2>
          </Link>
        </div>
        <div className="flex-1 flex justify-center space-x-4">
          <ul className="flex text-gray-300 text-lg font-medium  ">
            <li>
              <Link to="/offers">
              <h2 className="px-3 py-2 hover:text-white ">Offers</h2>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <h4 className="px-3 py-2 hover:text-white">Search for listings!</h4>
              </Link>
            </li>
            </ul>
          </div>
          <div className="flex justify-end space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/auth/signup">
              <button type="button" className="w-28 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
              </Link>
            </li>
            <li>
              <Link to="/auth/login">
                <button type="button" className="w-28 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In</button>
              </Link>
            </li>
          </ul>
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
      <Route path="/offers" element={<OfferSection setDetailsData={setDetailsData}/>} />
      <Route path="/auth/:formType" element={<AuthFormPage />} />
      </Routes>

    </>
  )
}

export default App
