import { Container } from "@mui/system";
import React from "react";
import NavBar from "./Components/Layout/NavBar/NavBar";
import Home from "./Components/Layout/Home/Home";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid container maxWidth="xl">
      <Home />
    </Grid>
  );
};

export default App;
