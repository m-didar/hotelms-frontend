import React from 'react'
import { Grid } from '@mui/material'
import Promo from '../../components/promo'
import Hotels from '../../components/hotels'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home">
            <Promo />
            <Hotels />
        </div>
    )
}

export default HomePage
