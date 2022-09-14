
import ReviewCard from './ReviewCard'
import './reviews.scss'

export default function Reviews({ reviews }) {
    return (
        <div className="reviews">
            <div className="reviews-container container">
                <h1 className="title">MÜŞTERİ YORUMLARI</h1>
                <div className="review-cards">
                    {
                        reviews.map((r,key) => (
                            <ReviewCard key={key} image={r.image} name={r.name} description={r.description} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
