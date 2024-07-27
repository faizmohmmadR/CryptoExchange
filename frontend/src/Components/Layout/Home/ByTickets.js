import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./style.css";
const ByTickets = () => {
  return (
    <Grid container justifyContent={"center"} gap={2} mt={10} mb={10}>
      <Grid item xs={12} md={10} textAlign={"center"}>
        <Typography
          variant="h2"
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color={"#0a0550"}
        >
          By Tickets
        </Typography>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={3.7} textAlign={"center"}>
          <Paper>
            <Box textTransform={"uppercase"}>
              <Typography variant="h4">visitors</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ByTickets;
