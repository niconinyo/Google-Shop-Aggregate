import { useState } from "react"
import Gallery from "../Gallery"

export default function SearchPage(props) {
    const [query, setQuery] = useState('')
    const [queryResults, setQueryResults] = useState([])


    async function getData() {
        const url=`https://real-time-product-search.p.rapidapi.com/search?q=${query}`
    
         const res = await fetch(url,{
            headers: {
                'X-RapidAPI-Key': '3b348ff6d3msh85a5ebcde5c743ap15ac87jsn1fea8af32b68',
                'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'  } } )
    
    const { data } = await res.json()
    setQueryResults([...data]);
    // console.log(data);
    }


    function handleQuerySubmit(event) {
        event.preventDefault()
        getData()
        // console.log(query)
    }
    return (
            <div className="search-page p-10 flex flex-col items-center ">
                <form onSubmit={handleQuerySubmit} className="text-center">
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-cyan-900 dark:cyan-900">
                        <h1 className="text-3xl font-bold mb-2 text-cyan-900 dark:text-cyan-900">Search for an Item!</h1>
                    </label>
                    <br />
                    <input
                        className="block w-100 m-5 p-2 ps-10 text-sm text-sky-100 rounded-lg bg-cyan-900 focus:ring-blue-500 dark:bg-cyan-900  dark:text-sky-100 dark:text-sky-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="search"
                        placeholder="Enter Search Here:"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="mb-4 p-1 h-8 px-10 bg-cyan-900 text-md font-bold text-sky-100 dark:sky-100 rounded"
                    >
                        Search
                    </button>
                </form>
                {queryResults.length > 0 && (
                    <Gallery
                    listings={queryResults}
                    url={`https://real-time-product-search.p.rapidapi.com/search?q=${query}`}
                    updateDetails={props.setDetailsData}
                    />
                )}
            </div>
        )
        
    }