import React, {useEffect, useState} from 'react'
import { Container, Typography, Card, CardContent, CardMedia, CardActionArea, Grid, Chip } from "@mui/material";
import HotelCard from "../hotelcard";
import './Hotels.css'

const Hotels = ({ data }) => {

    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setHotels(data)
        setLoading(false)
        console.log(hotels)
    }, [])

    return (
        <div className="hotels">
            <Container sx={{ padding: '50px' }} maxWidth="lg">
                <Typography sx={{ marginBottom: 5 }} variant="h4" component="h2">We have <span className="hotels_span">{hotels.length}</span> hotels <span className="hotels_span">all over the world</span></Typography>
                <Grid container spacing={2}>
                    {loading || hotels.map(hotel => <HotelCard data={hotel} />)}
                </Grid>
            </Container>
        </div>
    )
}

export default Hotels
