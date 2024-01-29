import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
const InputBx = () => {
  return (
    <div>
       <Paper
                  component="form"
                  sx={{
                    p: "8px 4px",
                  
                    display: "flex",
                    width: "70%",
                    backgroundColor: "#eaece5",
                  }}
                >
                  <InputBase sx={{ ml: 1, flex: 1 }} />
                </Paper>
    </div>
  )
}

export default InputBx
