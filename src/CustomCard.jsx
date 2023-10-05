import React from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";



const CustomCard = ({image , title , content})=>{
   const primary = '#0E2368';
    return (
        <>
<Card   
style={{
    padding: "20px"
}}>
    <CardMedia 
    component="img"
    height="257"
    width="256"
    borderradius="20"
    image = {image}
    alt ={title}
    style={{ paddingRight: '10px' ,
             borderRadius:30}}
    />
        <CardContent style={{
            color: primary,
            padding:20
        }}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="caption">
                    {content}
            </Typography>
            <br/>
            <Button 
            style={{
                borderRadius: 10,
                background:"transparent",
                color: primary,
                border: "1px solid black",
            }}>
                <Typography variant="caption">
                Read More 
                </Typography>
            </Button>
        </CardContent>

    
</Card>


        </>
    );


}

export default CustomCard;