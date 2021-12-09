import React, {useEffect} from 'react'
import { Container, Typography, Card, CardContent, CardMedia, CardActionArea, Grid, Chip } from "@mui/material";
import HotelCard from "../hotelcard";
import './Hotels.css'
import {getAllHotels} from "../../services/api";

const Hotels = () => {

    return (
        <div className="hotels">
            <Container sx={{ padding: '50px' }} maxWidth="lg">
                <Typography sx={{ marginBottom: 5 }} variant="h4" component="h2">We have <span className="hotels_span">__</span> hotels <span className="hotels_span">all over the world</span></Typography>
                <Grid container spacing={2}>
                    {/*{hotels.map(hotel => <HotelCard hotel={hotel} />)}*/}
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                </Grid>
            </Container>
        </div>
    )
}

export default Hotels
