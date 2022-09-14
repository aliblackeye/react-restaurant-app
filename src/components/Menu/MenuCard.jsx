import React from 'react'

export default function MenuCard({ image, title, price, discount }) {
    return (
        <div className="menu-card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <h1 className="card-title">{title}</h1>
            <div className="card-price">
                <span className="price">{price} TL</span>
                <span className="discount">{discount} TL</span>
            </div>
            <button className="add-to-card btn btn-dark">Sepete Ekle</button>
        </div>
    )
}
