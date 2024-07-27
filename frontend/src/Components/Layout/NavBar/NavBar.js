import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

const tabStyle = {
  color: "white",
  textTransform: "capitalize",
  fontWeight: "bold",
};

const buttonStyle = {
  color: "white",
  textTransform: "capitalize",
  fontWeight: "bold",
  padding: "15px",
};

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handelChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="xl">
      <AppBar sx={{ padding: "20px", bgcolor: "#071952" }}>
        <Grid container>
          <Grid item xs={3} md={3} textAlign={"center"}>
            <Typography variant="h4" fontWeight={"bold"}>
              CryptoExpo
            </Typography>
          </Grid>
          <Grid item xs={3} md={6} textAlign={"center"}>
            <Tabs value={value} onChange={handelChange}>
              <Tab sx={tabStyle} label="Home" />
              <Tab sx={tabStyle} label="Speackers" />
              <Tab sx={tabStyle} label="sponsers" />
              <Tab sx={tabStyle} label="partners" />
              <Tab sx={tabStyle} label="agenda" />
              <Tab sx={tabStyle} label="flooor plan" />
            </Tabs>
          </Grid>

          <Grid item xs={3} md={3} textAlign={"center"}>
            <Button variant="contained" sx={{ mr: 3 }} style={buttonStyle}>
              Become Sponser
            </Button>
            <Button variant="contained" style={buttonStyle}>
              By Tickets
            </Button>
          </Grid>
        </Grid>
      </AppBar>{" "}
    </Container>
  );
};

export default NavBar;
