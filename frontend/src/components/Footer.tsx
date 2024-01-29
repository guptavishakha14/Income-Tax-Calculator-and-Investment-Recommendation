import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer: React.FC = () => {
  return (
    <div className='footer' style={{position:'relative' , bottom:'0', width: "100%"}}>
    <Box sx={{ bgcolor: 'darkgreen', p: 4 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Typography align="center" color="text.secondary" component="p">
        © {new Date().getFullYear()} Your Website Name. All Rights Reserved.
      </Typography>
      {/* You can add other components or elements for your footer */}
    </Box>
    </div>
  );
};

export default Footer;