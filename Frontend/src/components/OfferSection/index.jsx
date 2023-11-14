import { useState, useEffect } from "react"
import { getOffers, postOffers } from "../../../utils/backend.js"
import Offer from "../Offer/index.jsx"

export default function OfferSection({}) {
    // Save comments queried from the database in state
    const [offer, setOffer] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        title: '',
        body: '',
        link:'',
        price:'',   
    })
    const refreshOffers = () => {
        getOffers().then(offers => {
            setOffer(offers);
        })
    }

    
    useEffect(() => {
        getOffers()
            .then(offers => setOffer(offers))
    }, [])


  
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }


    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCreateFormData({
            name: '',
            title: '',
            body: '',
            link:'',
            price:'', 
        })

        setShowCreateForm(false)
        console.log(createFormData, offer)
        postOffers({ ...createFormData })
            .then(() => refreshOffers())
    }


  
    let offerElements = [<p key='0' className='text-center'>Post your listing!</p>]
    if (offer.length > 0) {
        offerElements = offer.map(offer => {
            return <Offer
                key={offer._id}
                data={offer}
                
            />
        })
    }

    let btnText = 'Create'
    if (showCreateForm) {
        btnText = 'Close'
    }

    return (
        <div className='bg-cyan-900 rounded-lg p-5 mt-10 space-y-2 relative'>
            <h1 className='block mb-2 text-sm font-bold text-sky-100 dark:sky-100'>Create Your Listing!</h1>
            <button
                onClick={toggleCreateForm}
                className="top-0 right-10 absolute text-cyan-900 hover:text-sky-100 hover:bg-cyan-900 font-bold py-1 px-1 bg-sky-100 rounded cursor-pointer"
            >
                {btnText}
            </button>
            {
                showCreateForm && <form
                    onSubmit={handleSubmit}
                    className="w-2/4 text-cyan-900 rounded-lg dark:bg-sky-100  rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto text-right">
                    <input
                        name="name"
                        className="block mb-2 placeholder-sky-100 text-sm font-medium text-sky-100 dark:text-sky-100 bg-cyan-900"
                        placeholder="Your name"
                        value={createFormData.name}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        name="price"
                        className=" block mb-2 placeholder-sky-100 text-sm font-medium text-sky-100 dark:text-sky-100 bg-cyan-900"
                        placeholder="Enter price"
                        value={createFormData.price}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        name="title"
                        className="block mb-2 placeholder-sky-100 text-sm font-medium text-sky-100 dark:text-sky-100 bg-cyan-900"
                        placeholder="Title"
                        value={createFormData.title}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        name="link"
                        className=" block mb-2 placeholder-sky-100 text-sm font-medium text-sky-100 dark:text-sky-100 bg-cyan-900"
                        placeholder="Enter Link Here"
                        value={createFormData.link}
                        onChange={handleInputChange}
                    />
                    <br />
                    <textarea
                        name="body"
                        className="block p-2.5 w-full text-sm bg-cyan-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-900 dark:placeholder-sky-100 dark:text-sky-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Share your thoughts!"
                        value={createFormData.body}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="text-sky-100 hover:bg-sky-100 hover:text-cyan-900 font-bold py-1 px-2 bg-cyan-900 rounded cursor-pointer mr-2">
                        Post
                    </button>
                </form>
            }
            {offerElements}
        </div>
        
    )
}
