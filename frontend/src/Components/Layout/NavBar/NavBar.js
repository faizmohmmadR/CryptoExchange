import React, { useState } from "react";
import {
  AppBar,
  Box,
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
  textTransform: "capitalize",
  fontWeight: "bold",
  padding: "10px 15px",
};

const CustomButton = () => {
  return (
    <Box>
      <Button
        sx={{
          ...buttonStyle,
          mr: 3,
          bgcolor: "white",
          color: "red",

          ":hover": { backgroundColor: "red", color: "white" },
        }}
      >
        Become Sponser
      </Button>
      <Button
        sx={{
          ...buttonStyle,
          mr: 3,
          bgcolor: "red",
          color: "white",
          ":hover": { backgroundColor: "white", color: "red" },
        }}
      >
        By Tickets
      </Button>
    </Box>
  );
};

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handelChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ position: "sticky", top: "0%", zIndex: "2" }}
    >
      <AppBar
        sx={{
          padding: "10px",
          bgcolor: "#071952",
          opacity: "0.9",
        }}
      >
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
            <CustomButton />
          </Grid>
        </Grid>
      </AppBar>{" "}
    </Container>
  );
};

export default NavBar;
