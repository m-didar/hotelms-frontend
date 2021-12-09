import React, {useState} from 'react'
import { Modal, Box, Typography, TextField, Divider, Chip, Button } from '@mui/material'
import {getCurrentUser, login} from '../../services/authentication'
import './LoginModal.css'

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
    width: '100%',
    m: '10px 0'
}

const LoginModal = ({ open, handleClose, user, setUser, history }) => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [validationErrors, setValidationErrors] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)


    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (!email) setValidationErrors({
            email: 'This field is required',
            password: validationErrors.password
        })
        if (!password) setValidationErrors({
            email: validationErrors.email,
            password: 'This field is required'
        })

        if (!validationErrors.email && !validationErrors.password) {
            login({ email, password })
                .then(() => {
                    const { role } = getCurrentUser()
                    setUser()
                    if (role === 'guest') history.push('/')
                    else if (role === 'clerk') history.push('/clerk')
                    else if (role === 'manager') history.push('/manager')
                })
                .catch(err => {
                    const resMessage = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()

                    setLoading(false)
                    setMessage(resMessage)
                })
        } else {
            setLoading(false)
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Divider color="#000">
                    <Chip label="LOG IN" />
                </Divider>
                <Typography sx={{ fontWeight: 500, textTransform: 'uppercase', m: '25px 0 10px' }} variant="h5" component="h5">Welcome to PIKA</Typography>
                <TextField
                    error={validationErrors.email ? true : false}
                    helperText={validationErrors.email ? email : ''}
                    type="email"
                    sx={fieldStyle}
                    value={email}
                    id="email-field"
                    label="Email"
                    variant="outlined"
                    onChange={handleEmailChange}
                />
                <TextField
                    error={validationErrors.password ? true : false}
                    helperText={validationErrors.password ? validationErrors.password : ''}
                    sx={fieldStyle}
                    id="pass-field"
                    type='password'
                    value={password}
                    onChange={handlePassChange}
                    label="Password"
                    variant="outlined"
                />
                <Button
                    onClick={handleLogin}
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
                    Continue
                </Button>
            </Box>
        </Modal>
    )
}

export default LoginModal
