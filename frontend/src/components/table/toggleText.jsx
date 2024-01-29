import React from 'react'
import {  FormControlLabel,FormLabel,FormControl,Switch,FormGroup } from "@material-ui/core";
import { Box,Table,TableBody,TableCell,TableHead,TableRow,TableContainer} from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
const styles = {
    table: {
      border: 'none',
      padding:'0px',
      margin:'0px'
    },
  };
  
const ToggleText = ({text,classes}) => {

    return (
        <TableContainer>
   <Table className={classes.table}>               
      <div style={{display:'flex',alignItems:"center"}}>
      <TableRow>
      <TableCell align="left" style={{ minWidth: "200px" }}>
        <div style={{color:'black'}}>{text}</div>
        </TableCell>
        <TableCell align="center" style={{ minWidth: "100px" }}>
        <div>
          <Switch/>
        </div>
        </TableCell>
        </TableRow>
      </div>
      
      </Table>
      </TableContainer>
    )
  }


export default withStyles(styles)(ToggleText);
