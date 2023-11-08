import { useState } from "react"

export default function SearchPage() {
    const [query, setQuery] = useState('')
    const [queryResults, setQueryResults] = useState([])


//     async function getData(url) {
//         const url=`https://real-time-product-search.p.rapidapi.com/search?q=${query}`
    
//          const res = await fetch(url)
//             headers: {
//                 'X-RapidAPI-Key': '3b348ff6d3msh85a5ebcde5c743ap15ac87jsn1fea8af32b68',
//                 'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'    
//     }
//     const { data } = await res.json()
//     setQueryResults([...queryResults, ...data]);
//     }
// }

//     function handleQuerySubmit(event) {
//         event.precentDefault()
//         console.log(query)
    // }
    return (
            <div className="search-page p-10">
                <form onSubmit={handleQuerySubmit} className="mt-4 text-center">
                    <label htmlFor="search" className="block font-medium mb-1">
                        <h1 className="text-3xl font-bold">Search for an Item!</h1>
                    </label>
                    <br />
                    <input
                        className="p-2 w-[60vw] rounded border border-gray-300 focus:outline-none focus:border-gray-500"
                        name="search"
                        placeholder="Playstation 5"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="mx-1 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 bg-gray-700 rounded transition-all duration-200"
                    >
                        Search
                    </button>
                </form>
            </div>
        )
        
    }