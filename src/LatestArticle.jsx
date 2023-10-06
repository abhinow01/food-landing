import React from "react";
import  { useState } from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import CustomCard from "./CustomCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton"; 

const LatestArticle = ()=>{
  const theme = useTheme();
    const primary = '#0E2368';
    const articlesData = [
        // Define your articles data here
        {
          title: "Grilled Tomatoes at home",
          image: "/assets/article1.png",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          title: "Snacks for travel",
          image: "/assets/article2.png",
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac."
        },
        {
            title: "Post-workout recipes",
            image: "/assets/article3.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            title: "How to Grill Corn",
            image: "/assets/article4.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            title: "Crunchwrap Supreme",
            image: "/assets/article5.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            title: "Brocolli Cheese Soup",
            image: "/assets/article6.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        // Add more articles as needed
      ];

      const [currentPage,setCurrentPage] = useState(1);
      const totalPages = Math.ceil(articlesData.length/3);

      const handleNextPage = () => {
        setCurrentPage(currentPage === 2 ? 2 : currentPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
      };

      const startIndex = (currentPage - 1) * 3;
      const endIndex = startIndex + 3;

      const displayedArticles = articlesData.slice(startIndex, endIndex);


return (
    <>
    <div>   

        <Typography variant="h2" style={{
            left:0,
            top:0,
            color:primary ,
            padding: 30


        }}>
            Latest Articles 
        </Typography>
      <Grid container spacing={2}>
        {displayedArticles.map((article, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <CustomCard
              title={article.title}
              image={article.image}
              content={article.content}
            />
          </Grid>
        ))}
      </Grid>
      <center>
      <Box
            mt={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              // Apply styles based on screen size
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column", // Stack items on small screens
              },
            }}
          >
        <IconButton onClick={handlePrevPage} disabled={currentPage === 1}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="body1">
          {currentPage}/2
        </Typography>
        <IconButton onClick={handleNextPage} disabled={currentPage === 2}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      </center>
    </div>


    
    </>
)
}

export default LatestArticle;