import Card from "../Card";

export default function Gallery({ listings, updateDetails }) {
    return(
        <div className="gallery">
            {listings.length > 0 ? listings.map(listing => <Card key={listing.id} listingsData={listing} updateDetails={updateDetails} />) : <p>Your listings are loading...</p>}
        </div>
    )
}