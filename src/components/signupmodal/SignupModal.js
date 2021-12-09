import React, {useState} from 'react'
import {Modal, Box, Chip, Divider} from '@mui/material'
import './SignupModal.css'
import { TextField,Button, Typography,Select,FormControl,FormHelperText,MenuItem,InputLabel} from '@mui/material'
import {register} from "../../services/authentication";
import { useNavigate } from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 8
}
const fieldStyle = {
    width: '45%',
    m: '10px 0',
    marginLeft:'10px'
}

const SignupModal = ({ open, handleClose }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [IDType, setIDType] = new useState('')
    const [idnumber, setIDNumber] = useState('')
    const [address, setAddress] = useState('')
    const [mphone, setMPhone] = useState('')
    const [hphone, setHPhone] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const history = useNavigate()

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }
    const handleIDNumberChange = (event) => {
        setIDNumber(event.target.value)
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }
    const handleMPhoneChange = (event) => {
        setMPhone(event.target.value)
    }
    const handleHPhoneChange = (event) => {
        setHPhone(event.target.value)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        if (!email || !password || !name || !surname) alert("Please fill in all fields")
        else {
            register({
                email,
                password,
                id_type: IDType,
                id_number: idnumber,
                address,
                mobile_n: mphone,
                home_n: hphone,
                name,
                surname,
            })
                .then(res => {
                    setMessage(res.data.message)
                    setSuccess(true)
                    history(0)
                })
                .catch(err => {
                    const resMessage = (err.response &&
                        err.response.data &&
                        err.response.data.message) ||
                        err.message ||
                        err.toString()
                    setMessage(resMessage)
                    setSuccess(false)
                })
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Divider fullWidth color="#000">
                    <Chip label="SIGN UP" />
                </Divider>
                <div className="promo_div">
                    <Typography sx={{ fontWeight: 500, textTransform: 'uppercase', m: '25px 0 10px' }} variant="h5" component="h5">Welcome to PIKA</Typography>
                    <TextField
                        sx={fieldStyle}
                        id="name-field"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <TextField
                        sx={fieldStyle}
                        id="surname-field"
                        label="Surname"
                        variant="outlined"
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </div>
                <div className="promo_div">
                    <TextField
                        sx={fieldStyle}
                        id="email-field"
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        sx={fieldStyle}
                        id="password-field"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePassChange}
                    />
                </div>

                <div className="promo_div">
                    <FormControl required sx={{ marginTop:1, minWidth: 170,marginLeft:1}}>
                        <InputLabel id="id_type" className="label">ID Type</InputLabel>
                        <Select
                            label="ID Type"
                            id="id_type"
                            labelId="select-id_type-label"
                            value={IDType}
                            onChange={event => {
                                setIDType(event.target.value)
                            }}
                        >
                            <MenuItem value={"National ID"}>National ID</MenuItem>
                            <MenuItem value={"Passport"}>Passport</MenuItem>
                            <MenuItem value={"Birth certificate"}>Birth certificate</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        sx={fieldStyle}
                        id="id_number-field"
                        label="ID Number"
                        variant="outlined"
                        value={idnumber}
                        onChange={handleIDNumberChange}
                    />
                </div>
                <div className="promo_div">
                    <TextField
                        sx={fieldStyle}
                        id="address-field"
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        sx={fieldStyle}
                        id="m_number-field"
                        label="Mobile Phone Number"
                        variant="outlined"
                        type="tel"
                        value={mphone}
                        onChange={handleMPhoneChange}
                    />
                    <TextField
                        sx={fieldStyle}
                        id="h_number-field"
                        label="Home Phone Number"
                        variant="outlined"
                        type="tel"
                        value={hphone}
                        onChange={handleHPhoneChange}
                    />
                </div>
                <Button
                    onClick={handleRegister}
                    sx={{
                        mt: 2,
                        p: 1.2,
                        bgcolor: '#DD7564',
                        '&:hover': {
                            bgcolor: '#e2462c'
                        }
                    }}
                    variant="contained"
                    fullWidth
                >
                    Register
                </Button>
            </Box>
        </Modal>
    )
}

export default SignupModal
