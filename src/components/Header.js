import {AppBar , Container , MenuItem , Select , Toolbar,Typography} from "@material-ui/core";
import {createTheme , ThemeProvider , makeStyles , } from "@material-ui/core/styles";
import {useNavigate} from "react-router-dom";
import {CryptoState} from "../CryptoContext";
import React from 'react'

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))
const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const {currency , setCurrency} = CryptoState();

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            type:"dark",
        },
    });

  return (
    <ThemeProvider theme = {darkTheme}>
    <AppBar color = "transparent" position = "static">
        <Container>
            <Toolbar>
                <Typography onClick ={() => navigate("/")}
                variant = "h6"
                 className = {classes.title}>
                Crypto Tracker</Typography>
                <Select
                varient = "outlined"
                style = {{
                    width: 100,
                    heigh: 40,
                    marginRight: 15,
                }}
                value = {currency}
                onChange={(e) => setCurrency(e.target.value)}
                >
                    <MenuItem value = {"USD"}>USD</MenuItem>
                    <MenuItem value = {"INR"}>INR</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;