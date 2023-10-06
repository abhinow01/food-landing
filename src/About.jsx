import React from "react";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";


const About = () => {
    const red ='#E23744';
    const primary = '#0E2368'
  return (
    <Container
      style={{
        height: 467,
        background: "linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
        position: "relative",
        display: "flex",
        alignItems: "center"
      }}
      maxWidth={false}
    >
      <div style={{ marginLeft: 205, marginRight: 200 }}>
        <img
          src="/assets/about.jpg"
          alt="About Us"
          style={{ height: 467, width: 384, objectFit: "cover" }}
        />
      </div>
      <div style={{ width: 447 }}>
        <Typography variant="h5" style={{ marginBottom: 20,
        color: primary
         }}>
          About Us
        </Typography>
        <Typography variant="caption" paragraph style={{
          fontWeight:300
        }}>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's <br/>
        standard dummy text ever since the 1500s, when an unknown <br/>
        printer took a galley of type and scrambled it to make a type <br/>
        specimen book. t has survived not only five centuries.<br/>
        </Typography>
        <Button variant="contained" style={{
            background: red ,
            color:"white",
            borderRadius:28
        }}>  
        <Typography  variant="caption">
          Read More
          </Typography>
        </Button>
      </div>
    </Container>
    
  );
}

export default About;
