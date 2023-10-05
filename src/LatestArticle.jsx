import React from "react";
import  { useState } from "react";
import { Box, Button, Grid, Typography, formHelperTextClasses } from "@mui/material";
import CustomCard from "./CustomCard";

const LatestArticle = ()=>{
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
          image: "/assets/article1.png",
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            title: "Post-workout recipes",
            image: "/assets/article1.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            title: "How to Grill Corn",
            image: "/assets/article1.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            title: "Crunchwrap Supreme",
            image: "/assets/article1.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            title: "Brocolli Cheese Soup",
            image: "/assets/article1.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        // Add more articles as needed
      ];

      const [currentPage,setCurrentPage] = useState(1);
      const totalPages = Math.ceil(articlesData.length/3);

      const handleNextPage = () => {
        setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1);
      }
    
      const handlePrevPage = () => {
        setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
      }

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
      <Box mt={2} style={{
        display : "flex",
        alignItems: "center",
        justifyContent: "center"

      }}>
        <Button onClick={handlePrevPage}>{"<"}</Button>
        <Typography variant="body1">
          {currentPage}/{totalPages}
        </Typography>
        <Button onClick={handleNextPage}>{">"}</Button>
      </Box>
    </div>


    
    </>
)
}

export default LatestArticle;