import React from "react";
import UserLayout from "../components/Layout/UserLayout";
import { Box, Typography } from "@mui/material";
import background from "../images/background.jpg";

const About = () => {
  return (
    <UserLayout>
       <div className="home" style={{ backgroundImage: `url(${background})`, maxHeight:"91vh" }}>
      <Box
        sx={{
          my: 16,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2.5rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "3.5rem",
            },
          },
        }}
      >
        <div style={{backdropFilter:"blur(1.8px)", alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column", height:"400px"}}>
        <Typography
  variant="h3" // Set the Typography variant to 'h3' for a bigger font size
  style={{
    backgroundColor: "pink",
    width: "fit-content",
    borderRadius: "15px",
    padding: "6px",
  }}
  sx={{ color: "red", width: "100%" }}
>
  Welcome To Getaway!!
</Typography>
<br />
<br />

        <div style={{width:"70%", alignItems:"center",backgroundColor: "#b4d3f0",borderRadius: "15px",padding: "6px"}}>
        <p>
        Getaway is more than just a travel website; it's your passport to
        unforgettable experiences. At Getaway, we believe in the power of 
        exploration, connecting people with the world's most mesmerizing destinations.
        Our team of passionate travelers curates immersive tours, ensuring
        every journey is a blend of adventure, culture, and relaxation. With
        a commitment to excellence, we meticulously design itineraries that cater
        to diverse interests and preferences. Whether you're an adrenaline junkie 
        seeking thrilling escapades or a culture enthusiast craving authentic encounters,
        Getaway has the perfect expedition for you. Join us in crafting memories that last 
        a lifetime and embark on a transformative voyage with Getaway, where every trip is a 
        story waiting to be told.
         
        </p>
        <br />
        <p>
        That's a beautifully articulated description of Getaway!
        It vividly portrays Getaway as more than just a travel website,
        but rather a gateway to remarkable experiences. The emphasis on exploration,
        connection, and curated tours reflects a deep understanding of travelers'
        desires for meaningful journeys. The commitment to diverse interests and 
        preferences ensures that Getaway caters to a wide range of travelers. 
        The mention of crafting memories and transformative voyages adds a personal
        touch, inviting readers to be part of something truly special. Well done!

        </p>
        </div>
        </div>
      </Box>
    </div>
    </UserLayout>
  );
};

export default About;
