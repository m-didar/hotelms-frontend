import React, {useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Promo from '../../components/promo'
import Hotels from '../../components/hotels'
import './HomePage.css'
import {getAllHotels} from "../../services/api";

const HomePage = () => {

    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState();

    const loadAllHotels = () => {
        getAllHotels()
            .then(res => {
                setHotels(res)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError(err.message)
            })
    }

    useEffect(() => {
        loadAllHotels()
    }, [])

    useEffect(() => {
        loadAllHotels()
    }, [hotels])

    return (
        <div className="home">
            <Promo />
            {loading ?
                <Box sx={{ height: '50vh', width: '100%', p: 20, textAlign: 'center', bgcolor: '#DAE0E6' }}>
                    <CircularProgress />
                </Box>
                    :
                <Hotels data={hotels} loading={loading} error={error} />
            }
        </div>
    )
}

export default HomePage
