import React from "react"
import Home from "./Home"
import About from "./About"
import { Box, Container,Typography, Grid} from "@mui/material";
import './App.css'

import Button from "@mui/material/Button";
import LatestArticle from "./LatestArticle";
import Footer from "./Footer";




function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection:"column",
      flexWrap:"wrap",
      

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
      <section style={{ height: '100vh', padding: 20 }}>
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
