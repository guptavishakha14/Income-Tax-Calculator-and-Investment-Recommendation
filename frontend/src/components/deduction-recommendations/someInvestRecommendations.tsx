import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Recommendations() {
  const location = useLocation();
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://127.0.0.1:8000/calculate_tax_some_invest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(location.state),
        }
      );
      const data = await response.json();
      setRecommendations(data);
    }
    fetchData();
  }, [location.state]);

  if (!recommendations) {
    return <div>Loading...</div>;
  }

  const {
    totalIncome,
    lta,
    hra,
    cityType,
    houseRentAnnual,
    basicIncome,
    personalPay,
    epf,
    termInsurance,
    sukanyaSamruddhi,
    fixedDeposit,
    seniorCitizenSavings,
    principalRepaymentHomeLoan,
    tuitionFee,
    houseStampDutyAndRegistration,
    nationalSavingsCertificate,
    publicProvidentFund,
    voluntaryProvidentFund,
    nationalPensionSystem,
    elss,
    ulip,
    sharesAndBonds,
    postOfficeDeposit,
    total80cDeduction,
  } = recommendations;

  return (
    <div>
      <div>
        <br></br>
        <h4>User Inputs</h4>
        <p>Total Income (CTC): {totalIncome}</p>
        <p>Leave Travel Allowance (LTA): {lta}</p>
        <p>House Rent Allowance (HRA): {hra}</p>
        <p>City Type: {cityType}</p>
        <p>House Rent Annual: {houseRentAnnual}</p>
      </div>

      <hr></hr>
      <div>
        <h4>Total Income Breakdown</h4>
        <p>Basic Income: {basicIncome}</p>
        <p>Personal Pay: {personalPay}</p>

        <hr></hr>
        <h4>Invested Amount in 80C Section</h4>
        <h5>High Risk</h5>
        <p>Equity Linked Savings Schemes (ELSS): {elss}</p>
        <p>Unit Linked Insurance Plan (ULIP): {ulip}</p>
        <h5>Moderate Risk</h5>
        <p>National Pension System (NPS): {nationalPensionSystem}</p>
        <h5>Low Risk</h5>
        <p>EPF: {epf}</p>
        <p>Term Insurance: {termInsurance}</p>
        <p>Sukanya Samruddhi: {sukanyaSamruddhi}</p>
        <p>Fixed Deposit (FD): {fixedDeposit}</p>
        <p>Senior Citizen Savings: {seniorCitizenSavings}</p>
        <p>Principal Repayment Home Loan: {principalRepaymentHomeLoan}</p>
        <p>Tuition Fee: {tuitionFee}</p>
        <p>
          House Stamp Duty And Registration: {houseStampDutyAndRegistration}
        </p>
        <p>National Savings Certificate (NSC): {nationalSavingsCertificate}</p>
        <p>Public Provident Fund (PPF): {publicProvidentFund}</p>
        <p>Voluntary Provident Fund (VPF): {voluntaryProvidentFund}</p>
        <p>Tax Saving Shares/ NABARD and Other Bonds: {sharesAndBonds}</p>
        <p>Post Office Time Deposit Scheme: {postOfficeDeposit}</p>

        <p>Total 80C Deduction amount: {total80cDeduction}</p>
      </div>
    </div>
  );
}
