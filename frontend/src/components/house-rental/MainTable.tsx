import React, { useState } from "react";
import "./MainTable.css";
import "../Chapter.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { TableCell, TableRow } from "@mui/material";
import { getData } from "../salary-slip/salary-slip";

let annualHouseRent = 0;
let cityArea = "Metro";
export function inputData() {
  return {
    totalIncome: getData().TotalIncome,
    lta: getData().LTA,
    hra: getData().HRA,
    annualHouseRent: annualHouseRent,
    cityArea: cityArea,
  };
}

export const MainTable = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const [userData, setUserData] = useState({
    janrent: 0,
    febrent: 0,
    marrent: 0,
    aprrent: 0,
    mayrent: 0,
    junrent: 0,
    julrent: 0,
    augrent: 0,
    seprent: 0,
    octrent: 0,
    novrent: 0,
    decrent: 0,
    totalHouseRent: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => {
      const updatedState = {
        ...prevState,
        [name]: Number(value),
        totalHouseRent: annualHouseRent,
      };

      // Recalculate annualHouseRent
      updatedState.totalHouseRent =
        Number(updatedState.janrent) +
        Number(updatedState.febrent) +
        Number(updatedState.marrent) +
        Number(updatedState.aprrent) +
        Number(updatedState.mayrent) +
        Number(updatedState.junrent) +
        Number(updatedState.julrent) +
        Number(updatedState.augrent) +
        Number(updatedState.seprent) +
        Number(updatedState.octrent) +
        Number(updatedState.novrent) +
        Number(updatedState.decrent);

      // Assign annualHouseRent the value of totalHouseRent
      annualHouseRent = updatedState.totalHouseRent;

      return updatedState;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    cityArea = value;
  };

  return (
    <div className="app-container">
      <h3 onClick={handleToggle}>
        <i className="fa-sharp fa-solid fa-circle-plus"></i> House Rental
        Details{" "}
      </h3>
      {isVisible && (
        <>
          <div className={isVisible ? "fade-in" : "fade-out"}>
            <h2 className="tr-1"> House Rental Details </h2>
            <Paper sx={{ width: "100%" }}>
              {/* <TableScrollbar> */}

              <div
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  maxHeight: "500px",
                  maxWidth: "100%",
                }}
              >
                <table className="tab" style={{ overflow: "auto" }}>
                  <thead>
                    <TableRow>
                      <th>Month</th>
                      <th>City</th>
                      <th>Other City Name</th>
                      <th>Metro/non Metro</th>
                      <th>Previous Amt</th>
                      <th>Current Amount</th>
                      <th>Payroll Recovry</th>
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableCell>
                        <h5>April</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="aprrent"
                            value={userData.aprrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>May</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="mayrent"
                            value={userData.mayrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>June</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="junrent"
                            value={userData.junrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>July</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="julrent"
                            value={userData.julrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>August</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="augrent"
                            value={userData.augrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>September</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minWidth: "150px",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="seprent"
                            value={userData.seprent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>October</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="octrent"
                            value={userData.octrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>November</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="novrent"
                            value={userData.novrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>December</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="decrent"
                            value={userData.decrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>January</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="janrent"
                            value={userData.janrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>February</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="febrent"
                            value={userData.febrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h5>March</h5>
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                        />
                      </TableCell>
                      <TableCell className="TableCell-1">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={top100Films}
                          sx={{ width: 300, marginLeft: 10 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Other City" />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <select value={cityArea} onChange={handleChange}>
                          <option value="Metro">Metro</option>
                          <option value="Non Metro">Non Metro</option>
                        </select>
                      </TableCell>
                      <TableCell> </TableCell>
                      <TableCell className="TableCell-1">
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            m: "10px 0px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="marrent"
                            value={userData.marrent}
                            onChange={handleInputChange}
                          />
                        </Paper>
                      </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>
                  </tbody>
                </table>
              </div>

              {/* </TableScrollbar> */}
            </Paper>
          </div>
        </>
      )}
    </div>
  );
};

const top100Films = [
  { label: "Mumbai" },
  { label: "Pune" },
  { label: "Aurangabad" },
  { label: "Nagapur" },
  { label: "Latur" },
  { label: "Thane" },
  { label: "Solapur" },
];
