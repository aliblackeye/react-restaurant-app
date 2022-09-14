import Reviews from "../../components/Reviews/Reviews";


export default function ReviewScreen({ reviews }) {
    return (
        <div className="review-screen" style={{ margin: "150px" }}>
            <Reviews reviews={reviews} />
        </div>
    )
}
