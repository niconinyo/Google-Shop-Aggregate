import { useState } from "react"
import { updateReview, deleteReview } from "../../../utils/backend.js"

export default function Review({ data, refreshReviews }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        body: data.body
    })


    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }


    function handleSubmit(event) {
        event.preventDefault()
        setShowEditForm(false)
        updateReview(editFormData, data._id)
            .then(() => refreshReviews())
    }


    function handleDelete() {
        console.log(data._id, 'delete')
        deleteReview(data._id)
            .then(() => refreshReviews())
    }


    
    let reviewElement = <div
        className="bg-sky-100 h-50 m-20 rounded-lg p-1 px-10 text-cyan-900 border-2">
        <p className="font-bold">{data.name}</p>
        <p className="my-2">{data.body}</p>
        <div className="flex justify-end">
            <button
                onClick={() => { setShowEditForm(true) }}
                className="text-sky-100 hover:text-cyan-900 hover:bg-sky-100 font-bold py-2 px-4 bg-cyan-900 rounded cursor-pointer mr-2">
                Edit
            </button>
            <button
                onClick={handleDelete}
                className="text-sky-100 hover:text-cyan-900 hover:bg-sky-100 font-bold py-2 px-4 bg-cyan-900 rounded cursor-pointer mr-2">
                Delete
            </button>
        </div>
    </div>

   
    if (showEditForm) {
        reviewElement = <form
            onSubmit={handleSubmit}
            className="w-2/4 text-cyan-900 rounded-lg dark:bg-sky-100  rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto text-right">
            <input
                name="name"
                className="block mb-2 placeholder-sky-100 text-sm font-medium text-sky-100 dark:text-sky-100 bg-cyan-900"
                placeholder="Your name here!"
                value={editFormData.name}
                onChange={handleInputChange}
            />
            <br />
            <textarea
                name="body"
                className="block p-2.5 w-full text-sm bg-cyan-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-900 dark:placeholder-sky-100 dark:text-sky-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Details of your Offer!"
                value={editFormData.content}
                onChange={handleInputChange}
            />
            <div>
                <button
                    onClick={() => { setShowEditForm(false) }}
                    className="text-sky-100 hover:bg-sky-100 hover:text-cyan-900 font-bold py-1 px-2 bg-cyan-900 rounded cursor-pointer mr-2">
                    Close
                </button>
                <button
                    type="submit"
                    className="text-sky-100 hover:bg-sky-100 hover:text-cyan-900 font-bold py-1 px- bg-cyan-900 rounded cursor-pointer mr-2">
                    Post
                </button>
            </div>
        </form>
    }

    return reviewElement
}