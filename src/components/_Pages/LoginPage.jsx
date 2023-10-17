import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// --- Components --- //
import LoginForm from "../LoginForm/LoginForm";

// --- Content --- //
// import {
//     posters,
//     // other,
// } from "../../content/Products/Posters";

// --- MUI --- //
import { Typography, Box, Button } from "@mui/material";

// --- Sx Styles --- //
import {
    trans,
    sxProductHeroText,
    sxProductSectionOne,
    sxHeroTextContent,
    sxLoginPageContainer,
    sxContactTitle,
    sxContactText,
    sxLoginContent,
    sxLoginTitle,
    sxLoginText,
    sxRegisterFormBtn,

} from "../sxStyles";

function LoginPage() {

    return (
        <Box sx={sxLoginPageContainer}>

            <Box sx={sxLoginContent}>
                <Box sx={sxLoginTitle}>
                    <Typography sx={sxLoginText} variant="h1">
                        Login
                    </Typography>
                </Box>
                <LoginForm />
            </Box>
        </Box>
    );
}

export default LoginPage;