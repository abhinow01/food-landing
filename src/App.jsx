import React from "react"
 import Home from "./Home"
import About from "./About"
import { Box, Container,Typography, Grid} from "@mui/material";

import Button from "@mui/material/Button";
import LatestArticle from "./LatestArticle";
import Footer from "./Footer";


// const Home = ()=>{

//   const red ='#E23744';
//   const bodyGray = '#444957';
//   return (
//   <>
// <Container fixed
// style={{
//   background: "white"
// }}>

// <Grid container spacing={2}>
// <Grid item xs={6}
// style={{
//   // paddingRight: 90
// }}
// >

//   <Box style={{position: "relative" , paddingRight:50}}>
//   <img src="/assets/logo1.jpg" alt="Logo" style={{ position : "absolute", marginTop:22,marginLeft:78 }} />
//   <img src="/assets/textimg1.png" alt="" style={{ position : "absolute", marginTop:227,marginLeft:100 }} />
//   <Typography variant="body2" style={{position:"absolute", marginLeft:100, marginTop:460, color: bodyGray }}>
//    Naturally made Healthcare Products for the <br/>
//    better care & support of your body.
//   </Typography>

// <Button variant="contained"
// style={{
//   position:"absolute",
//   marginTop: 556,
//   marginLeft:97,
//   background:red,
//   color:"white",
//   borderRadius:28,

// }}
// >   
// <Typography variant="overline text" style={{
//   margin:10,
//   fontFamily:'humanist sans serif'
// }}>
//   explore now 
//   </Typography>
//   </Button>

//   </Box>
//   </Grid>
//   <Grid item xs={6} >
//       <Box style={{
//           // position: "relative"
//       }}>

  

//    <img src="/assets/pizza.jpg" alt="Pizza"   style={{
//           position:"absolute"
//       }}/>
//       <img src="/assets/Vector 1.svg" alt="Red"   style={{
//           position:"absolute"
//       }}/>
//       <Button variant = "outlined"
//   size="small"
//   style={{background: "transparent",
//   color: "white",
//   borderRadius: 16,
//   position: "absolute",
//   top: 25,
//   right:  10 , // Adjust the right distance from the screen edge
//   border: "1px solid white",
//   fontSize: "0.8rem",  }}>
//       <Typography variant="caption" display={"block"} gutterBottom>
//       Get In Touch 
//       </Typography>
//       </Button>



//       </Box>

//   </Grid>
//   </Grid>

// </Container>



//   </>
// )
// }



// const About = () =>{



//   return (
//       <>
//       <Container maxWidth="lg" 
//       style={{ marginTop: '20px' }}
//       //  style={{
//       //     paddingTop:989,
//       //     // width: 1440,
//       //     height: 487,
//       //     // display: "flex", // Wrap in quotes
//       //     // flexShrink: 0, // Correct capitalization
//       //     border: "1px solid #000", // Wrap in quotes
//       //     background: "linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)", // Wrap in quotes
//       //     boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", // Wrap in quotes
//       //     // zIndex: +1
//       //   }}
//       >
  
//           About us 

//       </Container>
      
      
//       </>
//   )

// }





function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection:"column",
      flexwrap:"wrap"


    }}>
      <section style={{ height: '100vh', padding: 20, overflow:'auto' }}>
        <Home />
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <section style={{ height: '100vh', padding: 20, background: "lightblue" }}>
        <About />
      </section>
      <section style={{ height: '100vh' }}>
        <LatestArticle />
      </section>
      <section style={{ minheight: '100vh' }}>
        <Footer />
      </section>
    </div>
  );
}

export default App;
