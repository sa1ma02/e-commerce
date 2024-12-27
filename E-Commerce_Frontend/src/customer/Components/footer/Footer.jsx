import { Grid, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IMAGES from '../../../Images';
const Footer = () => {
  return (
    <Grid className='bg-white text-black mt-10 text-center' container color={'black' } sx={{ bgcolor: 'white', color: 'white', py: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
    <img src={IMAGES.imgTwo} style={{ maxWidth: '100%', height: 'auto' }} /> 
  </Grid>
      <Grid  item xs={14} sm={8} md={6}>
        <Typography className='pb-5' variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
        ABOUT US
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
            Welcome to our site!
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
        We're passionate about what we do and committed
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
            to provid the highest quality products and services. 
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Our mission is to satisfy our customers by offering innovative</Typography>
          <Typography variant="body2" component="p" gutterBottom>
          solutions.</Typography>
      </Grid>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          CONTACT
        </Typography>
        <div>
    <IconButton aria-label="Instagram" style={{ color: '#yourColorCode' }} component="a" href="https://www.instagram.com/e_clotheess/">
      <InstagramIcon />
    </IconButton>
    <IconButton aria-label="Facebook" style={{ color: 'primary' }} component="a" href="https://www.instagram.com/">
      <FacebookIcon />
    </IconButton>
    <IconButton aria-label="WhatsApp" style={{ color: '#yourColorCode' }} component="a" href="https://wa.me/+212682164675/">
      <WhatsAppIcon />
    </IconButton>
    <IconButton aria-label="Email" color="black" component="a" href="mailto:fbakkari@insea.ac.ma">
      <EmailIcon /> </IconButton>
  </div>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
           2024 . All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love
          <FavoriteIcon style={{ verticalAlign: 'middle', color: 'red' }} />
        </Typography>
        
      </Grid>
    </Grid>
  );
};

export default Footer;