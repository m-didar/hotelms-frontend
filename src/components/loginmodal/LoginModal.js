import React, {useState} from 'react'
import { Modal, Box, Typography, TextField, Divider, Chip, Button } from '@mui/material'
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

const LoginModal = ({ open, handleClose }) => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleLogin = () => {

    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Divider fullWidth color="#000">
                    <Chip label="LOG IN" />
                </Divider>
                <Typography sx={{ fontWeight: 500, textTransform: 'uppercase', m: '25px 0 10px' }} variant="h5" component="h5">Welcome to PIKA</Typography>
                <TextField
                    type="email"
                    sx={fieldStyle}
                    value={email}
                    id="email-field"
                    label="Email"
                    variant="outlined"
                    onChange={handleEmailChange}
                />
                <TextField
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
