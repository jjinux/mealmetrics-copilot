import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Footer = () => {
    return (
        <Paper
            elevation={24}
            style={{
                padding: "20px",
                position: "fixed",
                bottom: "0",
                width: "100%",
                textAlign: "center",
            }}
        >
            <Typography>
                Made with ❤️ by LadyKerr, jjinux, and GitHub Copilot
            </Typography>
            <Typography>
                Powered by OpenAI 🤖
            </Typography>
        </Paper>
    );
};

export default Footer;