import React from "react";
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './Header.css'

const useStyles = makeStyles({
    header: {
        backgroundColor: "#20C1BD",
        padding: "15px 100px"
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        border: "2px solid #FFFEFE",
        borderRadius: "2px",
        padding: "8px",
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

    return (
        <AppBar className={header} position="fixed">
            <Toolbar className={toolbar}>
                <Typography variant="h6" component="h1" className={logo}>PIKA Hotels</Typography>
                <div className="header_btns">
                    <Button key="login-btn" to='/' component={Link} color="inherit" className={login_btn}>
                        Log in
                    </Button>
                    <Divider orientation="vertical" flexItem={true} color="#FFFEFE" variant="middle" />
                    <Button variant="outlined" to='/' component={Link} color="inherit" className={login_btn}>
                        Sign up
                    </Button>
                </div>
            </Toolbar>
        </AppBar>

        // <div className="header">
        //     <div className="header_nav">
        //         <div className="header_nav-icon">
        //             PIKA Hotels
        //         </div>
        //         <div className="header_nav-links">
        //             <Link to='/'>Home</Link>
        //         </div>
        //     </div>
        //     <div className="header_auth">
        //         <button className="header_auth-login">
        //             Log in
        //         </button>
        //         <button className="header_auth-signup">
        //             Sign up
        //         </button>
        //     </div>
        // </div>
    )
}

export default Header
