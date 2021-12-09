import React from 'react'
import {Modal, Box, Chip, Divider} from '@mui/material'
import './SignupModal.css'

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

const SignupModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Divider fullWidth color="#000">
                    <Chip label="SIGN UP" />
                </Divider>

            </Box>
        </Modal>
    )
}

export default SignupModal
