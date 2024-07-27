import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import ByTickets from "./ByTickets";

const buttonStyle = {
  textTransform: "capitalize",
  fontWeight: "bold",
  padding: "10px 20px",
};

const data = [
  {
    id: 1,
    title: "Expo",
    descriptionn:
      "Showcasing to thousands of traders and investors, leading cryptocurrency brands unveil their premier digital currency products and services at the forefront.",
  },

  {
    id: 2,
    title: "Conference",
    descriptionn:
      "Leading industry experts deliver valuable insights and the latest updates on cryptocurrencies to traders, investors, and businesses, enriching their understanding and knowledge.",
  },
  {
    id: 3,
    title: "Awards",
    descriptionn:
      "A brief overview of the outstanding cryptocurrencies honoured with awards during the ceremony.",
  },
];

const data2 = [
  { id: 1, title: "visitors", value: 5000 },
  { id: 2, title: "Companies", value: 80 },

  { id: 3, title: "Speakers", value: 60 },
  { id: 4, title: "countries", value: 30 },
];
const Home = () => {
  return (
    <Grid container>
      <Grid
        container
        height={"100vh"}
        bgcolor={"#071952"}
        color={"white"}
        justifyContent={"center"}
      >
        <NavBar />
        <Grid item xs={10} textAlign={"center"}>
          <Typography variant="h5">
            21 - 22 May 2025,Zabeel Hall -6, Dubai World Trade Center
          </Typography>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            margin={"10px 0px"}
          >
            Crypto Expo Dubai 2025
          </Typography>
          <Typography variant="h5" textTransform={"uppercase"}>
            Shaping the future of finance in the city of innovation
          </Typography>
          <Grid container justifyContent={"center"}>
            <Grid
              item
              xs={10}
              md={3.5}
              mt={4}
              display={"flex"}
              justifyContent={"space-between"}
            >
              {" "}
              <Button
                sx={{
                  ...buttonStyle,
                  mr: 3,
                  bgcolor: "#071952",
                  border: "2px solid white",
                  color: "white",

                  ":hover": { backgroundColor: "white", color: "red" },
                }}
              >
                Become Sponser
              </Button>
              <Button
                sx={{
                  ...buttonStyle,

                  bgcolor: "red",
                  color: "white",
                  ":hover": { backgroundColor: "white", color: "red" },
                }}
              >
                By Tickets
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={8} mt={8} textAlign={"center"}>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            color={"#0a0550"}
          >
            Who We Are
          </Typography>

          <Typography mt={4}>
            Crypto Expo Dubai is organized by Hqmena. Witness the largest Crypto
            Expo in Dubai with top-notch investors and leaders in the
            cryptocurrency industry to network and discover new business
            possibilities. Don't pass up the chance to network with the best
            cryptocurrency businesses for trading and investing. Learn about the
            cryptocurrency industry, Altcoins, Blockchain, and Consensus. We are
            highly proficient in organizing a B2C event by providing the
            cryptocurrency industry with supreme quality educational resources
            and networking possibilities.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} gap={2} mt={8}>
        {data.map((item) => (
          <Grid item xs={11} md={3.6} position={"relative"} key={item.id} zIndex={'0'}>
            <Box
              sx={{
                height: "30%",
                width: "100%",
                bgcolor: "#0a0550",
              }}
              component={"img"}
              src="./logo512.png"
            ></Box>
            <Box
              sx={{
                height: "40%",
                margin: "0px",
              }}
              className="box"
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography sx={{ lineHeight: "40px" }}>
                {item.descriptionn}
              </Typography>
            </Box>

            <Box sx={{ position: "absolute", top: "17%", left: "35%" }}>
              <Typography
                textTransform={"uppercase"}
                variant="h5"
                bgcolor={"gray"}
                color={"white"}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container justifyContent={"center"} gap={2}>
        {data2.map((item) => (
          <Grid
            item
            xs={4}
            md={2.6}
            key={item.id}
            textAlign={"center"}
            color={"#0a0550"}
          >
            <Typography variant="h2" fontWeight={"bold"}>
              {item.value}+
            </Typography>
            <Typography variant="h5" textTransform={"capitalize"}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <ByTickets />
    </Grid>
  );
};

export default Home;
