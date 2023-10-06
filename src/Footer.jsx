import { Grid, Typography, Link } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const clr = '#F8F8F8';
  const primary = '#0E2368';
  return (
    <Grid container spacing={4}   
    style={{
      width:'100%',
      justifyContent:'space-evenly',
        background: clr,
        padding:70,
        display:'flex'
    }}>
      {/* Column 1: Logo */}
      <Grid item xs={12} sm={3} >
        {/* Add your logo here */}
        <img src="/assets/logo2.png" alt="Logo" />
      </Grid>

      {/* Column 2: Contact Information */}
      <Grid item xs={12} sm={3} >
        <Typography variant="body1" gutterBottom style={{color:primary}}>
          Contact us
        </Typography>
        <Typography variant="caption" style={{
          fontWeight:300
        }}>
          Lorem Ipsum Pvt Ltd.5/1,Magalton<br/>
          Road, Phartosh Gate near YTM<br/>
          Market, XYZ-343434<br/><br/>
          example2020@gmail.com<br /><br/>
          904 443-0343
        </Typography>
      </Grid>

      {/* Column 3: More Links */}
      <Grid item xs={12} sm={3} >
        <Typography variant="h6" gutterBottom style={{color:primary}}>
          More
        </Typography>
        <Typography variant="caption"  style={{fontWeight:300}}>About Us</Typography><br /> <br />
        <Typography variant="caption"  style={{fontWeight:300}}>Products</Typography><br /><br />
        <Typography variant="caption"  style={{fontWeight:300}}>Careers</Typography><br /><br />
        <Typography variant="caption"  style={{fontWeight:300}}>Contact Us</Typography><br /><br />
        
          
        
      </Grid>

      {/* Column 4: Social Links */}
      <Grid item xs={12} sm={3} >
        <Typography variant="h6" gutterBottom style={{color:primary}}>
          Follow Us
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TwitterIcon />
          </Grid>
          <Grid item>
            <InstagramIcon />
          </Grid>
          <Grid item>
            <FacebookIcon />
          </Grid>
        </Grid>
        <Typography variant="caption" style={{
          fontWeight: 300
        }}> <br/><br/><br/>
          © 2023 Your Company. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
