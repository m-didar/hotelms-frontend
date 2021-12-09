import React, {useState} from 'react'
import { Autocomplete, TextField, Select, InputLabel, MenuItem, Box, FormControl, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { DatePicker, LocalizationProvider } from "@mui/lab"
import './HotelSearch.css'

const cities = ['Astana', 'Almaty', 'New-York', 'Paris', 'Taraz', 'Moscow', 'Berlin', 'Toronto', 'Madrid', 'Milan']
const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const HotelSearch = () => {

    const [city, setCity] = new useState('')
    const [checkInDate, setCheckInDate] = new useState(today)
    const [checkOutDate, setCheckOutDate] = new useState(tomorrow)
    const [roomType, setRoomType] = new useState('')

    const handleClick = () => {
        const data = { city, checkInDate, checkOutDate, roomType }
        console.log(data)
    }

    return (
        <div className="hotelsearch">
            <Autocomplete
                id="city-select"
                value={city}
                sx={{ width: 200 }}
                options={cities}
                autoComplete
                autoHighlight
                onChange={(event, newValue) => {
                    setCity(newValue)
                }}
                renderInput={params => <TextField {...params} label="Destination" variant="outlined" required color="warning"/>}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Check-in"
                    value={checkInDate}
                    onChange={newValue => {
                        setCheckInDate(newValue)
                    }}
                    renderInput={params => <TextField {...params} color="warning" required />}
                />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Check-out"
                    value={checkOutDate}
                    onChange={newValue => {
                        setCheckOutDate(newValue)
                    }}
                    renderInput={params => <TextField {...params} color="warning" required />}
                />
            </LocalizationProvider>
            <Box sx={{ width: 120 }} className="hotelsearch_select">
                <FormControl fullWidth required color="warning">
                    <InputLabel id="select-roomtype-label">Room</InputLabel>
                    <Select
                        labelId="select-roomtype-label"
                        id="select-roomtype"
                        value={roomType}
                        label="Room"
                        onChange={event => {
                            setRoomType(event.target.value)
                        }}
                    >
                        <MenuItem value="single">Single</MenuItem>
                        <MenuItem value="double">Double</MenuItem>
                        <MenuItem value="suite">Suite</MenuItem>
                        <MenuItem value="penthouse">Penthouse</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Button className="hotelsearch_btn" onClick={handleClick} variant="contained" endIcon={<SendIcon />}>
                Find Hotel
            </Button>
        </div>
    )
}

export default HotelSearch
