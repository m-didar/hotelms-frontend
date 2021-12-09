import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './Header.css'
import LoginModal from "../loginmodal";

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

const Header = () => {

    const { header, logo, login_btn, toolbar } = useStyles()
    const [loginModalOpen, setLoginModalOpen] = useState(false)

    const handleLoginClick = () => {
        setLoginModalOpen(true)
    }

    const handleLoginClose = () => {
        setLoginModalOpen(false)
    }

    return (
        <AppBar className={header} position="fixed">
            <Toolbar className={toolbar}>
                <Typography variant="h6" component="h1" className={logo}>PIKA Hotels</Typography>
                <div className="header_btns">
                    <Button key="login-btn" onClick={handleLoginClick} color="inherit" className={login_btn}>
                        Log in
                    </Button>
                    <LoginModal open={loginModalOpen} handleClose={handleLoginClose} />
                    <Divider orientation="vertical" flexItem={true} color="#FFFEFE" variant="middle" />
                    <Button variant="outlined" to='/' component={Link} color="inherit" className={login_btn}>
                        Sign up
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
