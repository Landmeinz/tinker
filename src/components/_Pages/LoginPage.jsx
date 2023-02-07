import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

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

function LoginPage() {
    // const history = useHistory();

    const [registerFormStatus, setRegisterFormStatus] = useState(false);

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

            {!registerFormStatus ?
                <Button sx={sxRegisterFormBtn} onClick={() => setRegisterFormStatus(!registerFormStatus)}
                    variant="contained">New? Register Account</Button>
                :
                <Button sx={sxRegisterFormBtn} onClick={() => setRegisterFormStatus(!registerFormStatus)}
                    variant="contained">Hide Registration</Button>
            }

            {/* open the registration form when we click on the button above */}
            {registerFormStatus && 
                <Box sx={sxLoginContent}>
                <Box sx={sxLoginTitle}>
                    <Typography sx={sxLoginText} variant="h1">
                        Register Tinkerer
                    </Typography>
                </Box>
                <RegisterForm />
            </Box>}

        </Box>
    );
}

export default LoginPage;