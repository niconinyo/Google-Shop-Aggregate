import { useState, useEffect } from "react"
import { postReview, getReviews } from "../../../utils/backend.js"
import Review from "../Review/index.jsx"

export default function ReviewSection({ listingsId }) {
    
    const [reviews, setReviews] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        body: ''
    })

    
    useEffect(() => {
        getReviews(listingsId)
            .then(reviews => setReviews(reviews))
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

   
    function refreshReviews() {
        getReviews(listingsId)
            .then(newReviewData => setReviews(newReviewData))
    }

    // Execute form submission logic
    function handleSubmit(event) {
        event.preventDefault()
        setCreateFormData({
            name: '',
            body: ''
        })
      
        setShowCreateForm(false)
        console.log(createFormData, listingsId)
        postReview({ ...createFormData, listingsId: listingsId })
            .then(() => refreshReviews())
    }


  
    let reviewElements = [<p key='0' className='text-center text-sky-100'>Be the first to leave a Review!</p>]
    if (reviews.length > 0) {
        reviewElements = reviews.map(review => {
            return <Review
                key={review._id}
                data={review}
                refreshReviews={refreshReviews}
            />
        })
    }

   
    let btnText = 'Create'
    if (showCreateForm) {
        btnText = 'Close'
    }

    return (
        <div className='bg-cyan-900 rounded-lg p-3 pb-5 mt-10 space-y-2 relative'>
            <h1 className='block mb-2 text-sm font-bold text-sky-100 dark:sky-100'>Consumer Thoughts</h1>
            <button
                onClick={toggleCreateForm}
                className="top-0 right-5 absolute text-cyan-900 hover:text-sky-100 hover:bg-cyan-900 font-bold py-1 px-2 bg-sky-100 rounded cursor-pointer"
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
            {reviewElements}
        </div>
    )
}
