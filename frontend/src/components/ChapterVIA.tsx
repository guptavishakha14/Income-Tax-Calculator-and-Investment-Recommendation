import React, { useState } from 'react'
import "./Chapter.css"
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export const ChapterVIA = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  }
  const [userData, setUserData] = useState({
    
  })
  return (
    <div className='app-container chapter-container'>
       
      <h3 className='ani' onClick={handleToggle}>  <i className="fa-sharp fa-solid fa-circle-plus"></i> Chapter VI </h3>
      {isVisible && (
      
      <>
      <div className={isVisible ? 'fade-in' : 'fade-out'}>

       <h2 className='tr-1' > Chapter VI A</h2>
       <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '500px', maxWidth: '100%' }}>
      <table>
        <thead>
          <tr>
            <th>sr.no</th>
            <th> </th>
            <th>Previous Amt</th>
            <th>Current Amt</th>
            <th>Payroll Recovery</th>
            <th>Limits</th>
            <th>Eligible Deduction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><h5>Additional contribution to NPS 80CCD (1B)</h5></td>
            <td> </td>
            <td>
              <Paper component="form" sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: "100%", minWidth:"150px",backgroundColor: "#eaece5" }}>

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
          <tr>
            <td>2</td>
            <td><h5>Mediclaim (80-D)</h5><br />
              <div className='switch-div1'>
              Is self covered ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>
              
              <div className='switch-div1'>
              Are Your Parent Covered ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>
              
              <div className='switch-div1'>
              Is Parent Senior Citizen ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>

              <div className='switch-div1'>
              Is Parent Very Senior Citizen ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>
              
              <p className='pre'>Preventive Health Checkup</p>
            </td>
            <td> </td>
            <td>
              <Paper component="form" sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: "100%", minWidth:"150px",backgroundColor: "#eaece5" }}>

                <InputBase sx={{ ml: 1, flex: 1 }} />
                <IconButton type="button" sx={{ p: '10px' }}>
                  <AddCircleOutlineIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} >
                  <HelpOutlineSharpIcon />
                </IconButton>

              </Paper>

              <br />
              <br />
              <br />
              <br />
              <br/>
              <Paper component="form" sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: "100%",minWidth:"150px", backgroundColor: "#eaece5" }}>
                <InputBase sx={{ ml: 1, flex: 1 }} />
              </Paper></td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>3</td>
            <td><h5>Handicapped Dependent (80-D)</h5><br />
              <div className='switch-div1'>
              Is Handicapped Dependent ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              
              </div>
              <div className='switch-div1'>
              Is severe ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>
            </td>
            <td> </td>
            <td>
              <Paper component="form" sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: "100%", minWidth:"150px",backgroundColor: "#eaece5" }}>

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
          <tr>
            <td>4</td>
            <td><h5>Treatment Of Specified Diseases(80-DDB)</h5><br />
            <div className='switch-div1'>
              Is Senior Citizen?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              
              </div>
              <div className='switch-div1'>
              Is very Senior Citizen ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>

              <p className='pre'>Amount Recovered from Insurance Company</p>
            </td>
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
              <br />
              <br />
              <br />
              <Paper component="form" sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: "100%",minWidth:"150px", backgroundColor: "#eaece5" }}>
                <InputBase sx={{ ml: 1, flex: 1 }} />
              </Paper>
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>5</td>
            <td><h5>Interest on Educational Loan(80-E)</h5><br />
            <div className='switch-div1'>
              Is Full Time?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>

            </td>
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
          <tr>
            <td>6</td>
            <td><h5> Physically Handicapped (80-U)</h5><br />
            <div className='switch-div1'>
              Is Physically Handicapped?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>
              <div className='switch-div1'>
              Is severe ?
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              </div>
            </td>
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
          <tr>
            <td>7</td>
            <td><h5>Interest on Deposit in Saving Account(80TTA)</h5><br />
            </td>
            <td> </td>
            <td>
              <Paper component="form" sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: "100%", minWidth:"150px",backgroundColor: "#eaece5" }}>

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


