import { useState } from "react"


export default function Offer({ data, refreshReviews }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name:'',
        title: '',
        body: '',
        link:'',
        price:'',    
    })

    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }


    let offerElement = <div
        className="bg-sky-100 h-200 m-20 rounded-lg p-1 px-10 text-cyan-900 border-2 rounded-lg w-[80vw] mx-auto">
        <p className="font-bold">{data.name}</p>
        <p className="my-2">{data.body}</p>
        <div className="flex justify-end">
        </div>
    </div>

    
    return offerElement
}