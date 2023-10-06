import { Box, Container,Typography, Grid} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import About from "./About";

const Home = ()=>{

    const red ='#E23744';
    const bodyGray = '#444957';
    return (
    <>
<Container fixed
style={{
    background: "white"
}}>

<Grid container spacing={2}>
<Grid item xs={6}
style={{
    // paddingRight: 90
}}
>

    <Box style={{position: "relative" , paddingRight:50}}>
    <img src="/assets/logo1.jpg" alt="Logo" style={{ position : "absolute", marginTop:22,marginLeft:78 }} />
    <img src="/assets/textimg1.png" alt="" style={{ position : "absolute", marginTop:227,marginLeft:100 }} />
    <Typography variant="body2" style={{position:"absolute", marginLeft:100, marginTop:460, color: bodyGray, fontWeight:300 }}>
     Naturally made Healthcare Products for the <br/>
     better care & support of your body.
    </Typography>

<Button variant="contained"
style={{
    position:"absolute",
    marginTop: 556,
    marginLeft:97,
    background:red,
    color:"white",
    borderRadius:28,

}}
>   
<Typography variant="overline text" style={{
    margin:10,
    fontFamily:'humanist sans serif'
}}>
    explore now 
    </Typography>
    </Button>

    </Box>
    </Grid>
    <Grid item xs={6} >
        <Box style={{
            // position: "relative"
        }}>

    
   <div>
     <img src="/assets/pizza.jpg" alt="Pizza"   style={{
            position:"absolute"
        }}/>
        </div>
        <div style={{
  position: "absolute",
  top: 0,
  right: 0
}}>
  <img src="/assets/Vector 1.svg" alt="Red" />
</div>

        <Button variant = "outlined"
    size="small"
    style={{background: "transparent",
    color: "white",
    borderRadius: 16,
    position: "absolute",
    top: 35,
    right:  35 , // Adjust the right distance from the screen edge
    border: "1px solid white",
    fontSize: "0.8rem",  }}>
        <Typography variant="caption" display={"block"} gutterBottom>
        Get In Touch 
        </Typography>
        </Button>

        </Box>

    </Grid>
    </Grid>

</Container>



    </>
)
}
export default Home;