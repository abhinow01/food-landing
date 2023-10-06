import React from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";



const CustomCard = ({image , title , content})=>{
   const primary = '#0E2368';
    return (
        <>
<Card   
style={{
    padding: "20px",
    minHeight:"554",
    // overflow:"auto",
    borderRadius:40
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
            padding:20
        }}>
            <Typography variant="h6" style={{
                color: primary
            }}>
                {title}
            </Typography>
            <Typography variant="caption" style={{
                fontWeight: 300
            }}>
                    {content}
            </Typography>
            <br/>
            <br/>
            <Button 
            style={{
                borderRadius: 16,
                background:"transparent",
                color: primary,
                border: "1px solid black",
            }}>
                <Typography variant="caption" style={{
                    padding:2
                }}>
                Read More 
                </Typography>
            </Button>
        </CardContent>

    
</Card>


        </>
    );


}

export default CustomCard;