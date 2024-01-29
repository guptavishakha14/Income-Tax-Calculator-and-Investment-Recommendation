import React, { useState } from "react";
import "./HouseRental.css";
import { MainTable } from "./MainTable";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2"];

function HouseRental() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <div className="house-container" style={{ display: "flex" }}>
        <label className="container-label">House Rental Status</label>
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          controllable-states-demo
          options={options}
          sx={{ width: 300, marginLeft: 20, minWidth: "150px" }}
          renderInput={(params) => <TextField {...params} label="" />}
        />

        <div className="table-container"></div>
      </div>

      <hr />
      <MainTable />
    </div>
  );
}

export default HouseRental;
