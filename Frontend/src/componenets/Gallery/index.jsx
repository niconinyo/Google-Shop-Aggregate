import Card from "../Card";

export default function Gallery({ listings, updateDetails }) {
    return(
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {listings.length > 0 ? listings.map(listing => <Card key={listing.id} className="flex flex-col" listingsData={listing} updateDetails={updateDetails} />) : <p className="">Your listings are loading...</p>}
        </div>
    )
}