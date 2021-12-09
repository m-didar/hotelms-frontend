import React from 'react'
import './Promo.css'
import HotelSearch from "../hotelsearch/HotelSearch";

const Promo = () => {
    return (
        <div className="promo">
            <h1 className="promo_title">Welcome to our <span className="promo_title-emph">Hotels by PIKA</span> chain</h1>
            <HotelSearch />
        </div>
    )
}

export default Promo
