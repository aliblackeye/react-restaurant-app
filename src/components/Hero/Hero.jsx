import { Link } from 'react-router-dom'
import './hero.scss'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-img">
                <img src="./images/hero/pizza.jpg" alt="" />
            </div>
            <div className="hero-container container">
                <div className="hero-info">
                    <div className="title">EVE SİPARİŞ</div>
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, assumenda?</p>
                    <Link to="/#"><button className="btn btn-dark">Sipariş Et</button></Link>
                </div>
            </div>
        </div>
    )
}
