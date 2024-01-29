import React, { useState } from 'react'
import './MainTable.css'
import '../Chapter.css'
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const HouseLoanRepayment = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const handleToggle = () => {
    setIsVisible(!isVisible);
  }
  return (

    <div className='app-container'>

      <h3 onClick={handleToggle}> <i className="fa-sharp fa-solid fa-circle-plus"></i> Self Occupied House Loan Repayment</h3>
      {isVisible && (
        <>
          <div className={isVisible ? 'fade-in' : 'fade-out'}>
            <h2 className='tr-1' >Self Occupied House Loan Repayment </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>sr.no</th>
                    <th>Self Occupied House Loan Interest Repayment</th>
                    <th>Previos Amt</th>
                    <th>Current Amt</th>
                    <th>Payroll Recovery</th>
                    <th>Limit</th>
                    <th>Eligible Deduction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><h5>Interest on self occupied House Property</h5></td>
                    <td> </td>
                    <td>
                      <Paper component="form" sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: "100%",minWidth:"150px", backgroundColor: "#eaece5" }}>

                        <InputBase sx={{ ml: 1, flex: 1 }} />
                        <IconButton type="button" sx={{ p: '10px' }}>
                          <AddCircleOutlineIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} >
                          <HelpOutlineSharpIcon />
                        </IconButton>

                      </Paper>
                    </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </>
      )}
    </div>
   
  )

}

export default HouseLoanRepayment