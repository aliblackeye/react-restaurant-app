import { FaRegComment } from "react-icons/fa"
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im"

export default function ReviewCard({ image, description, name }) {
    return (
        <div className="review-card">
            <div className="review-icon">
                <FaRegComment color="#66452d" size={120} />
            </div>
            <p className="description">
                {description}
            </p>
            <div className="customer-img">
                <img src={image} alt="" />
            </div>
            <span className="customer-name">{name}</span>
            <div className="customer-stars">
                <ImStarFull color="orange" />
                <ImStarFull color="orange" />
                <ImStarFull color="orange" />
                <ImStarFull color="orange" />
                <ImStarHalf color="orange" />
            </div>
        </div>
    )
}
