import React, {useEffect, useState} from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography, Collapse, Button, Modal, Box, Divider, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import './HotelCard.css'
import {getRoomsByHotel_Id} from "../../services/api";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ccc',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
}

const HotelCard = ({ hotel }) => {

    const [expanded, setExpanded] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [roomTypes, setRoomTypes] = useState([])
    const [roomType, setRoomType] = useState('')

    // const loadRoomsByHotel = () => {
    //     getRoomsByHotel_Id(hotel.id)
    //         .then(res => {
    //             setRoomTypes(res)
    //         })
    //         .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     loadRoomsByHotel()
    // }, [])

    const handleCardClick = () => {
        setExpanded(!expanded)
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleRoomChange = (event) => {
        setRoomType(event.target.value)
    }

    return (
        <Grid item xs={4} >
            <Card sx={{ width: '100%' }}>
                <CardActionArea onClick={handleCardClick}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`https://via.placeholder.com/${500}/60686E`}
                        alt="hotel"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>City, Country</Typography>
                        <Typography variant="h5" component="div">Hotel Name</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">Address</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                        <Typography sx={{ fontSize: 13, marginTop: 1, display: 'inline-block' }} component="div">Room types: </Typography>
                        {/*{roomTypes.map(room => <Chip size="small" label={room} />)}*/}
                        <Chip size="small" label="Single" />  <Chip size="small" label="Double" />  <Chip size="small" label="Suite" />
                    </CardContent>
                </CardActionArea>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Button onClick={handleOpenModal} sx={{ backgroundColor: '#1FA5A6' }} variant="contained">
                            Make a reservation
                        </Button>
                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                        >
                            <Box sx={style}>
                                <Typography sx={{ mb: 2 }} id="modal-modal-title" variant="h6" component="h2">MAKE A RESERVATION</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: "space-between",
                                        alignItems: 'center',
                                        padding: '10px',
                                        width: '100%',
                                        border: '1px solid #bbb',
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                        bgcolor: 'background.paper',
                                        '& hr': {
                                            mx: 0.5,
                                        }
                                    }}
                                >
                                    <Box sx={{ width: '42%' }}>
                                        <Typography sx={{ fontSize: 12, pl: '2px' }}>CHECK IN</Typography>
                                        <Typography sx={{ lineHeight: 1 }} variant="h6">10.12.2021</Typography>
                                    </Box>
                                    <Divider orientation="vertical" color="#000" flexItem />
                                    <Box sx={{ width: '42%' }}>
                                        <Typography sx={{ fontSize: 12, pl: '2px' }}>CHECK OUT</Typography>
                                        <Typography variant="h6">11.12.2021</Typography>
                                    </Box>
                                </Box>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ top: 10 }} id="room-select-label">Room Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={roomType}
                                        label="Room Type"
                                        onChange={handleRoomChange}
                                    >
                                        {/*{roomTypes.map(room => <MenuItem value={room}>{room}</MenuItem>)}*/}
                                        <MenuItem value="single">Single</MenuItem>
                                        <MenuItem value="double">Double</MenuItem>
                                        <MenuItem value="suite">Suite</MenuItem>
                                        <MenuItem value="penthouse">Penthouse</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button sx={{ mt: 3, width: '100%', padding: '12px', backgroundColor: '#DD7564', '&:hover': {backgroundColor: '#d9472a'} }} variant="contained">
                                    Enter
                                </Button>
                            </Box>
                        </Modal>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

export default HotelCard
