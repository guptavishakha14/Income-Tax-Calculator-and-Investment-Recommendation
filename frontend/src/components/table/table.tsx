import React, { useEffect, useState } from "react";
import "./table.css";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import { Typography } from "antd";
import {
  AppBar,
  FormControlLabel,
  FormLabel,
  FormControl,
  Switch,
  FormGroup,
  TextField,
  Toolbar,
  InputBase,
} from "@material-ui/core";
import Paper from "@mui/material/Paper";
import AppsIcon from "@mui/icons-material/Apps";
import ToggleText from "./toggleText";
import InputBx from "./input";
import ButtonField from "./buttonField";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";

let fetchedEpfValue = 0;
let fetchedTermInsurance = 0;
let fetchedSukanyaSamruddhi = 0;
let fetchedFixedDeposit = 0;
let fetchedSeniorCitizenSavings = 0;
let fetchedPrincipalRepaymentHomeLoan = 0;
let fetchedTuitionFee = 0;
let fetchedHouseStampDutyAndRegistration = 0;
let fetchedNationalSavingsCertificate = 0;
let fetchedPublicProvidentFund = 0;
let fetchedVoluntaryProvidentFund = 0;
let fetchedNationalPensionSystem = 0;
let fetchedElss = 0;
let fetchedUlip = 0;
let fetchedSharesAndBonds = 0;
let fetchedPostOfficeDeposit = 0;
let fetchedTotal80cDeduction = 0;

export function fetchData() {
  return {
    epf: fetchedEpfValue,
    termInsurance: fetchedTermInsurance,
    sukanyaSamruddhi: fetchedSukanyaSamruddhi,
    fixedDeposit: fetchedFixedDeposit,
    seniorCitizenSavings: fetchedSeniorCitizenSavings,
    principalRepaymentHomeLoan: fetchedPrincipalRepaymentHomeLoan,
    tuitionFee: fetchedTuitionFee,
    houseStampDutyAndRegistration: fetchedHouseStampDutyAndRegistration,
    nationalSavingsCertificate: fetchedNationalSavingsCertificate,
    publicProvidentFund: fetchedPublicProvidentFund,
    voluntaryProvidentFund: fetchedVoluntaryProvidentFund,
    nationalPensionSystem: fetchedNationalPensionSystem,
    elss: fetchedElss,
    ulip: fetchedUlip,
    sharesAndBonds: fetchedSharesAndBonds,
    postOfficeDeposit: fetchedPostOfficeDeposit,
    total80cDeduction: fetchedTotal80cDeduction,
  };
}

const TableEx = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [data, setData] = useState([
    {
      epf: "Provident Fund",
      value: "",
    },
    {
      termInsurance: "Term Insurance Premium",
      value: "",
    },
    {
      sukanyaSamruddhi: "Sukanya Samriddhi Scheme",
      value: "",
    },
    {
      fixedDeposit: "Tax saving Fix Deposits (Tenure -5 years or more)",
      value: "",
    },
    {
      seniorCitizenSavings: "Senior Citizen Saving Scheme",
      value: "",
    },
    {
      principalRepaymentHomeLoan: "Housing Loan - Principal Repayment",
      value: "",
    },
    {
      tuitionFee: "Tuition fees for 2 children",
      value: "",
    },
    {
      houseStampDutyAndRegistration: "Housing - Stamp Duty & Registration",
      value: "",
    },
    {
      nationalSavingsCertificate: "National Saving Certificate",
      value: "",
    },
    {
      publicProvidentFund: "Public Provident Fund",
      value: "",
    },
    {
      voluntaryProvidentFund: "Voluntary Provident Fund",
      value: "",
    },
    {
      nationalPensionSystem: "Employee's National Pension Scheme 80CCD(1)",
      value: "",
    },
    {
      elss: "E.L.S.S (Tax Saving Mutual Fund) Tax Saving Mutual Fund ELSS Details",
      value: "",
    },
    {
      ulip: "Unit Linked Insurance Plan",
      value: "",
    },
    {
      sharesAndBonds: "Tax Saving Shares/ NABARD and Other Bonds",
      value: "",
    },
    {
      postOfficeDeposit: "Post Office Time Deposit Scheme",
      value: "",
    },
  ]);
  const [total80cDeduction, setTotal80cDeduction] = useState<number>(0);

  useEffect(() => {
    const calculateTotal80cDeduction = () => {
      const total = data.reduce((total, row) => total + Number(row.value), 0);
      setTotal80cDeduction(total);
      fetchedTotal80cDeduction = total;
    };

    calculateTotal80cDeduction();
  }, [data]);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleValueChange = (index: number, value: string) => {
    const updatedData = [...data];
    updatedData[index].value = value;
    setData(updatedData);
    // console.log("data  :", data);
  };

  const callData = () => {
    return {
      epf: data[0].value,
      termInsurance: data[1].value,
      sukanyaSamruddhi: data[2].value,
      fixedDeposit: data[3].value,
      seniorCitizenSavings: data[4].value,
      principalRepaymentHomeLoan: data[5].value,
      tuitionFee: data[6].value,
      houseStampDutyAndRegistration: data[7].value,
      nationalSavingsCertificate: data[8].value,
      publicProvidentFund: data[9].value,
      voluntaryProvidentFund: data[10].value,
      nationalPensionSystem: data[11].value,
      elss: data[12].value,
      ulip: data[13].value,
      sharesAndBonds: data[14].value,
      postOfficeDeposit: data[15].value,
    };
  };

  fetchedEpfValue = Number(callData().epf);
  fetchedTermInsurance = Number(callData().termInsurance);
  fetchedSukanyaSamruddhi = Number(callData().sukanyaSamruddhi);
  fetchedFixedDeposit = Number(callData().fixedDeposit);
  fetchedSeniorCitizenSavings = Number(callData().seniorCitizenSavings);
  fetchedPrincipalRepaymentHomeLoan = Number(
    callData().principalRepaymentHomeLoan
  );
  fetchedTuitionFee = Number(callData().tuitionFee);
  fetchedHouseStampDutyAndRegistration = Number(
    callData().houseStampDutyAndRegistration
  );
  fetchedNationalSavingsCertificate = Number(
    callData().nationalSavingsCertificate
  );
  fetchedPublicProvidentFund = Number(callData().publicProvidentFund);
  fetchedVoluntaryProvidentFund = Number(callData().voluntaryProvidentFund);
  fetchedNationalPensionSystem = Number(callData().nationalPensionSystem);
  fetchedElss = Number(callData().elss);
  fetchedUlip = Number(callData().ulip);
  fetchedSharesAndBonds = Number(callData().sharesAndBonds);
  fetchedPostOfficeDeposit = Number(callData().postOfficeDeposit);

  return (
    <div className="app-container">
      <h3 onClick={handleToggle}>
        <i className="fa-sharp fa-solid fa-circle-plus"></i> Investment Under
        Section 80-C
      </h3>
      {isVisible && (
        <>
          <div className={isVisible ? "fade-in" : "fade-out"}>
            <h2 className="tr-1">Investment Under Section 80-C</h2>

            <TableContainer>
              <Table>
                <TableRow>
                  <th>Sr.No</th>
                  <th style={{ width: "350px" }}></th>
                  <th style={{ width: "150px" }}>Previous Amt</th>
                  <th>Current Amt</th>
                  <th style={{ width: "150px" }}>Payroll recovery</th>
                  <th>Limits</th>
                  <th>Eligible Deduction</th>
                </TableRow>

                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell sx={{ color: "black" }}>
                        {Object.values(row)[0]}
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <Paper
                          component="form"
                          sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            width: "70%",
                            backgroundColor: "#eaece5",
                          }}
                        >
                          <InputBase
                            value={row.value}
                            onChange={(e) =>
                              handleValueChange(index, e.target.value)
                            }
                          />
                          <IconButton type="button" sx={{ p: "10px" }}>
                            <AddCircleOutlineIcon />
                          </IconButton>
                          <Divider
                            sx={{ height: 28, m: 0.5 }}
                            orientation="vertical"
                          />
                          <IconButton color="primary" sx={{ p: "10px" }}>
                            <HelpOutlineSharpIcon />
                          </IconButton>
                        </Paper>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>1,50,000</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell sx={{ color: "skyblue" }}>
                      Total (80-C+80-CCC)
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>{total80cDeduction}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>1,50,000</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default TableEx;
