import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./salary-slip.css";
import { Link } from "react-router-dom";
// import CollapsibleRecommendation from '../collapsible/collapsible';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

let totalIncome = 0;
let houseRentAllowance = 12;
let leaveTravelAllowance = 6;
let emplyeeProvidentFund = 12;

export function getData() {
  return {
    TotalIncome: totalIncome,
    HRA: houseRentAllowance,
    LTA: leaveTravelAllowance,
    EPF: emplyeeProvidentFund,
  };
}

export default function Salaryslipme() {
  const [userData, setUserData] = useState({
    name: "",
    mobile: "",
    bonus: "",
    LTA: "6",
    email: "",
    income: "",
    EPF: "12",
    HRA: "12",
    cityType: "",
    houseRentAnnual: "",
    age: "",
    parentAge: "",
    hasChildren: "",
    hasDaughter: "",
    isDisabled: "",
    isSeverelyDisabled: "",
    isDependentDisabled: "",
    dependentDisabledPercentage: "",
    annualInterestSavingsAccount: "",
    purchasedNewHouse: "",
    hasHomeLoan: "",
    homeLoanAnnualInterest: "",
    firstTimeBuyerHome: "",
    educationLoanInterest: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("userData",userData)
    try {
      // console.log("totalIncome type:", typeof userData.income);
      // console.log("JSON payload:", JSON.stringify({ totalIncome: parseFloat(userData.income) }));
      const response = await axios.post(
        "http://127.0.0.1:8000/calculate_tax_zero_invest",
        {
          totalIncome: parseFloat(userData.income),
          epf: parseFloat(userData.EPF),
          lta: parseFloat(userData.LTA),
          hra: parseFloat(userData.HRA),
          cityType: userData.cityType,
          houseRentAnnual: parseFloat(userData.houseRentAnnual),
          age: parseInt(userData.age),
          parentAge: parseInt(userData.parentAge),
          hasChildren: userData.hasChildren,
          hasDaughter: userData.hasDaughter,
          isDisabled: userData.isDisabled,
          isSeverelyDisabled: userData.isSeverelyDisabled,
          isDependentDisabled: userData.isDependentDisabled,
          dependentDisabledPercentage: parseFloat(
            userData.dependentDisabledPercentage
          ),
          annualInterestSavingsAccount: parseFloat(
            userData.annualInterestSavingsAccount
          ),
          purchasedNewHouse: userData.purchasedNewHouse,
          hasHomeLoan: userData.hasHomeLoan,
          homeLoanAnnualInterest: parseFloat(userData.homeLoanAnnualInterest),
          firstTimeBuyerHome: userData.firstTimeBuyerHome,
          educationLoanInterest: parseFloat(userData.educationLoanInterest),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("Response:", response.data);
      navigate("/zero-invest-recommendations", {
        state: {
          totalIncome: response.data.totalIncome,
          epf: response.data.epf,
          lta: response.data.lta,
          hra: response.data.hra,
          cityType: response.data.cityType,
          houseRentAnnual: response.data.houseRentAnnual,
          age: response.data.age,
          parentAge: response.data.parentAge,
          hasChildren: response.data.hasChildren,
          hasDaughter: response.data.hasDaughter,
          isDisabled: response.data.isDisabled,
          isSeverelyDisabled: response.data.isSeverelyDisabled,
          isDependentDisabled: response.data.isDependentDisabled,
          dependentDisabledPercentage:
            response.data.dependentDisabledPercentage,
          annualInterestSavingsAccount:
            response.data.annualInterestSavingsAccount,
          purchasedNewHouse: response.data.purchasedNewHouse,
          hasHomeLoan: response.data.hasHomeLoan,
          homeLoanAnnualInterest: response.data.homeLoanAnnualInterest,
          firstTimeBuyerHome: response.data.firstTimeBuyerHome,
          educationLoanInterest: response.data.educationLoanInterest,
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let hra = userData.HRA;
    let epf = userData.EPF;
    let lta = userData.LTA;

    if (name === "income") {
      const income = parseFloat(value);
      if (!isNaN(income)) {
        hra = ((income * 0.4 * 12) / 100).toFixed(2);
        epf = ((income * 0.4 * 12) / 100).toFixed(2);
        lta = ((income * 0.4 * 6) / 100).toFixed(2);
      }
      totalIncome = income;
      houseRentAllowance = parseFloat(hra);
      leaveTravelAllowance = parseFloat(lta);
      emplyeeProvidentFund = parseFloat(epf);
    } else if (name === "LTA") {
      // Update LTA state
      lta = value;
      leaveTravelAllowance = parseFloat(lta);
    } else if (name === "HRA") {
      // Update HRA state
      hra = value;
      houseRentAllowance = parseFloat(hra);
    } else if (name === "EPF") {
      // Update EPF state
      epf = value;
      emplyeeProvidentFund = parseFloat(epf);
    }

    setUserData((prevState) => ({
      ...prevState,
      HRA: hra,
      EPF: epf,
      LTA: lta,
      [name]: value,
    }));
  };

  return (
    <form className="bg" onSubmit={handleSubmit}>
      <div className="salaryslip_container">
        <div className="heading">
          <h1>Salary Slip</h1>
        </div>
        <div className="input-container">
          <div className="containers">
            <div>
              <label>Name: </label>
              <TextField
                required
                label="Name"
                variant="standard"
                color="success"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Phone no: </label>
              <TextField
                required
                label="Phone number"
                type="number"
                variant="standard"
                color="success"
                name="mobile"
                value={userData.mobile}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Bonus: </label>
              <TextField
                required
                label="Bonus"
                type="number"
                variant="standard"
                color="success"
                name="bonus"
                value={userData.bonus}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>LTA: </label>
              <TextField
                label="Leave Travel Allowance"
                type="number"
                variant="standard"
                color="success"
                name="LTA"
                value={userData.LTA}
                onChange={onChange}
              />
            </div>
            <div>
              <label>City Type: </label>
              <TextField
                required
                label="Metro(M)/Non Metro(NM)"
                type="text"
                variant="standard"
                color="success"
                name="cityType"
                value={userData.cityType}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Age: </label>
              <TextField
                required
                label="age"
                type="number"
                variant="standard"
                color="success"
                name="age"
                value={userData.age}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Has Children: </label>
              <RadioGroup
                name="hasChildren"
                value={userData.hasChildren}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Disabled: </label>
              <RadioGroup
                name="isDisabled"
                value={userData.isDisabled}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Dependent Disabled: </label>
              <RadioGroup
                name="isDependentDisabled"
                value={userData.isDependentDisabled}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Annual Interest on Savings Account: </label>
              <TextField
                required
                label="Annual Interest on Savings Account"
                type="number"
                variant="standard"
                color="success"
                name="annualInterestSavingsAccount"
                value={userData.annualInterestSavingsAccount}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Has Home Loan: </label>
              <RadioGroup
                name="hasHomeLoan"
                value={userData.hasHomeLoan}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>First Time Home Buyer: </label>
              <RadioGroup
                name="firstTimeBuyerHome"
                value={userData.firstTimeBuyerHome}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="containers">
            <div>
              <label>Email: </label>
              <TextField
                required
                label="Email"
                type="email"
                variant="standard"
                color="success"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Income (CTC): </label>
              <TextField
                required
                label="Income"
                type="number"
                variant="standard"
                color="success"
                name="income"
                value={userData.income}
                onChange={onChange}
              />
            </div>
            <div>
              <label>EPF: </label>
              <TextField
                label="Employees Provident Fund"
                type="number"
                variant="standard"
                color="success"
                name="EPF"
                value={userData.EPF}
                onChange={onChange}
              />
            </div>
            <div>
              <label>HRA: </label>
              <TextField
                label="House Rent Allowance"
                type="number"
                variant="standard"
                color="success"
                name="HRA"
                value={userData.HRA}
                onChange={onChange}
              />
            </div>
            <div>
              <label>House Annual Rent: </label>
              <TextField
                required
                label="House Rent Annual"
                type="number"
                variant="standard"
                color="success"
                name="houseRentAnnual"
                value={userData.houseRentAnnual}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Parent's Age: </label>
              <TextField
                label="parentAge"
                type="number"
                variant="standard"
                color="success"
                name="parentAge"
                value={userData.parentAge}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Has Daughter: </label>
              <RadioGroup
                name="hasDaughter"
                value={userData.hasDaughter}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Severely Disabled: </label>
              <RadioGroup
                name="isSeverelyDisabled"
                value={userData.isSeverelyDisabled}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Dependent Disablity Percentage: </label>
              <TextField
                required
                label="Dependent Disablity Percentage"
                type="number"
                variant="standard"
                color="success"
                name="dependentDisabledPercentage"
                value={userData.dependentDisabledPercentage}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Purchased New House: </label>
              <RadioGroup
                name="purchasedNewHouse"
                value={userData.purchasedNewHouse}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio required color="success" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio required color="success" />}
                  label="No"
                />
              </RadioGroup>
            </div>
            <div>
              <label>Home Loan Annual Interest: </label>
              <TextField
                required
                label="Home Loan Annual Interest"
                type="number"
                variant="standard"
                color="success"
                name="homeLoanAnnualInterest"
                value={userData.homeLoanAnnualInterest}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Education Loan Interest: </label>
              <TextField
                required
                label="Education Loan Interest"
                type="number"
                variant="standard"
                color="success"
                name="educationLoanInterest"
                value={userData.educationLoanInterest}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group-button">
          <Link to="/calculate-tax-old">
            <input type="submit" value="Calculate tax" className="button" />
          </Link>

          <Link to="/more-deductions">
            <input
              type="submit"
              value="Add more deductions"
              className="button"
            />
          </Link>

          <input type="submit" value="Recommendations" className="button" />
        </div>
      </div>
    </form>
  );
}
