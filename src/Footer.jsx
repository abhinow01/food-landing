import { Grid, Typography, Link } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const clr = '#F8F8F8';
  return (
    <Grid container spacing={4}   
    style={{
        background: clr,
        paddingTop:50
    }}>
      {/* Column 1: Logo */}
      <Grid item xs={12} sm={3}>
        {/* Add your logo here */}
        <img src="/assets/logo1.jpg" alt="Logo" />
      </Grid>

      {/* Column 2: Contact Information */}
      <Grid item xs={12} sm={3}>
        <Typography variant="h6" gutterBottom>
          Contact us
        </Typography>
        <Typography>
          Address Line 1<br />
          Address Line 2<br />
          Phone: (123) 456-7890<br />
          Email: example@example.com
        </Typography>
      </Grid>

      {/* Column 3: More Links */}
      <Grid item xs={12} sm={3}>
        <Typography variant="h6" gutterBottom>
          More
        </Typography>
        <Typography>
          <Link href="#">About Us</Link><br />
          <Link href="#">Products</Link><br />
          <Link href="#">Careers</Link><br />
          <Link href="#">Contact Us</Link>
        </Typography>
      </Grid>

      {/* Column 4: Social Links */}
      <Grid item xs={12} sm={3}>
        <Typography variant="h6" gutterBottom>
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
        <Typography variant="caption">
          © 2023 Your Company. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
