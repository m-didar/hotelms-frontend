import React, {useEffect, useState} from 'react'
import { Grid } from '@mui/material'
import Promo from '../../components/promo'
import Hotels from '../../components/hotels'
import './HomePage.css'
import {getAllHotels} from "../../services/api";

const HomePage = () => {

    // const [hotels, setHotels] = useState([])

    // const loadAllHotels = () => {
    //     getAllHotels()
    //         .then(res => {
    //             setHotels(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     loadAllHotels()
    // }, [])

    return (
        <div className="home">
            <Promo />
            <Hotels />
        </div>
    )
}

export default HomePage
