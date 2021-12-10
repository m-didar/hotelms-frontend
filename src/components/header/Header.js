import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { AppBar, Toolbar, Typography, Button, Divider, IconButton, Popover } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { makeStyles } from "@mui/styles";
import './Header.css'
import LoginModal from "../loginmodal";
import SignupModal from "../signupmodal";
import {logout} from "../../services/authentication";

const useStyles = makeStyles({
    header: {
        backgroundColor: "#1b1c1d",
        padding: "0 100px"
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        border: "2px solid #FFFEFE",
        borderRadius: "2px",
        padding: "4px 8px",
        cursor: "pointer"
    },
    login_btn: {
        fontFamily: "Open-Sans, sans-serif",
        fontWeight: 700,
        fontSize: "16px"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    }
})

const Header = ({ user, setUser }) => {

    const history = useNavigate()
    const { header, logo, login_btn, toolbar } = useStyles()

    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [signUpModalOpen, setSignUpModalOpen] = useState(false)
    const [anchor, setAnchor] = useState(false)

    const handlePopClick = (event) => {
        setAnchor(event.currentTarget)
    }

    const handlePopClose = () => {
        setAnchor(null)
    }

    const open = Boolean(anchor)
    const id = open ? 'profile-popover' : undefined

    const handleLoginClick = () => {
        setLoginModalOpen(true)
    }

    const handleLoginClose = () => {
        setLoginModalOpen(false)
    }

    const handleSignUpClick = () => {
        setSignUpModalOpen(true)
    }

    const handleSignUpClose = () => {
        setSignUpModalOpen(false)
    }

    const handleLogOutClick = () => {
        logout()
        history(0)
    }

    const renderAuthBtns = () => {
        return (
            <div className="header_btns">
                <Button key="login-btn" onClick={handleLoginClick} color="inherit" className={login_btn}>
                    Log in
                </Button>
                <LoginModal open={loginModalOpen} handleClose={handleLoginClose} user={user} setUser={setUser} />
                <Divider orientation="vertical" flexItem={true} color="#FFFEFE" variant="middle" />
                <Button onClick={handleSignUpClick} variant="outlined" to='/' component={Link} color="inherit" className={login_btn}>
                    Sign up
                </Button>
                <SignupModal open={signUpModalOpen} handleClose={handleSignUpClose} />
            </div>
        )
    }

    const renderProfileBtn = () => {
        return (
            <div>
                <IconButton aria-describedby={id} onClick={handlePopClick} sx={{ transform: 'scale(1.5,1.5)' }} size="large" color="inherit" aria-label="profile">
                    <AccountCircleIcon />
                </IconButton>
                <Popover
                    sx={{

                    }}
                    id={id}
                    open={open}
                    anchorEl={anchor}
                    onClose={handlePopClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <Button sx={{ width: 150, p: 2 }} component={Link} to="/profile">My Account</Button>
                    <Divider />
                    <Button onClick={handleLogOutClick} sx={{ width: '100%', p: 1, borderRadius: 0 }} color="error" variant="contained">Log out</Button>
                </Popover>
            </div>
        )
    }

    return (
        <AppBar className={header} position="fixed">
            <Toolbar className={toolbar}>
                <Button component={Link} to="/"><Typography  variant="h6" component="h1" className={logo}>PIKA Hotels</Typography></Button>
                {user ? renderProfileBtn() : renderAuthBtns()}
            </Toolbar>
        </AppBar>
    )
}

export default Header
