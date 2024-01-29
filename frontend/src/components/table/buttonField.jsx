import React from 'react'
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const ButtonField = () => {
  return (
    <div>
       <Paper component="form" sx={{ p: '2px 4px',ml:'175px', display: 'flex', alignItems: 'center', width: "40%" ,backgroundColor:"#eaece5"}}>
    
    <InputBase sx={{ ml: 1, flex: 1 }} />
    <IconButton type="button" sx={{ p: '10px' }}>
      <AddCircleOutlineIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <IconButton color="primary" sx={{ p: '10px' }} >
      <HelpOutlineSharpIcon />
    </IconButton>
  </Paper>

    </div>
  )
}

export default ButtonField
