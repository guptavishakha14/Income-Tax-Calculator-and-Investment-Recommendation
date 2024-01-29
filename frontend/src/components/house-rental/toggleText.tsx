import React from 'react'
import {  FormControlLabel,FormLabel,FormControl,Switch,FormGroup } from "@material-ui/core";
import { Box,Table,TableBody,TableCell,TableHead,TableRow,TableContainer} from "@mui/material";
function ToggleText(props: { text: string }) {

    return (
        <TableContainer>
   <Table>               
      <div style={{display:'flex',alignItems:"center"}}>
      <TableRow>
      <TableCell align="left" style={{ minWidth: "200px" }}>
        <div style={{color:'black'}}>{props.text}</div>
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


export default ToggleText;
