import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';

// --- Components --- //
import Product from "../Product/Product"
import ContactButton from "../ContactButton/ContactButton";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

// --- Content --- //
import {
    posters,
    // other,
} from "../../content/Products/Posters";

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

function RegisterPage() {
    // const history = useHistory();
    // const [registerFormStatus, setRegisterFormStatus] = useState(false);

    // function handleRegistrationReveal() {
    //     console.log('--- registerFormStatus:', registerFormStatus);

    //     if (!registerFormStatus) {
    //         console.log('--- registerFormStatus:', registerFormStatus);
    //         setRegisterFormStatus(true);
    //         window.scrollTo(0, 250);
    //         console.log('---    window.scrollTo(0, 200) ---');
    //         return
    //     }
    //     setRegisterFormStatus(false);
    //     window.scrollTo(0, 0);
    // }

    return (
        <Box sx={sxLoginPageContainer}>
            <Box sx={sxLoginContent}>
                <Box sx={sxLoginTitle}>
                    <Typography sx={sxLoginText} variant="h1">
                        Register Tinkerer
                    </Typography>
                </Box>
                <RegisterForm />
            </Box>
        </Box>
    );
}

export default RegisterPage;