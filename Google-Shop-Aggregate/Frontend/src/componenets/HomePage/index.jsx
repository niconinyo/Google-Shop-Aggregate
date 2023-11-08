import Gallery from "../Gallery";

export default function HomePage(props) {
    return (
    <> 
        <h1>Take a quick peak at 30 listings!</h1>

        <Gallery
            listings={props.listings}
            updateDetails={props.setDetailsData}
        />
    </> 
    )
}