import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Recommendations() {
  const location = useLocation();
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://127.0.0.1:8000/calculate_tax_zero_invest",
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
  // console.log(recommendations);
  const {
    totalIncome,
    epf,
    lta,
    hra,
    cityType,
    houseRentAnnual,
    age,
    parentAge,
    hasChildren,
    hasDaughter,
    isDisabled,
    isSeverelyDisabled,
    isDependentDisabled,
    dependentDisabledPercentage,
    annualInterestSavingsAccount,
    purchasedNewHouse,
    hasHomeLoan,
    homeLoanAnnualInterest,
    firstTimeBuyerHome,
    educationLoanInterest,
    basicIncome,
    personalPay,
    calculateDeductions,
    total80cDeduction,
    totalExtraDeductions,
    stdDeduction,
    totalDeduction,
    incomeAfterDeduction,
    taxableIncome,
  } = recommendations;
  const {
    remaining80c,
    recommendedPackages,
    section10,
    sectionGg,
    section80Ccd1B,
    section80D,
    section80U,
    section80Dd,
    section80E,
    section80Ee,
    section24,
    section80Tta,
    section80Ttb,
    section80G,
  } = calculateDeductions;
  const { elss, ulip } = recommendedPackages[0];
  const { nationalPensionSystem } = recommendedPackages[1];
  const {
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
    sharesAndBonds,
    postOfficeDeposit,
  } = recommendedPackages[2];
  const { minHRASalaried } = section10;
  const { minHRANonSalaried } = sectionGg;
  const { additionalNps } = section80Ccd1B;
  const { medicalTaxPayer, medicalParents } = section80D[0];
  const { selfDisability } = section80U;
  const { dependentDisability } = section80Dd;
  const { educationLoan } = section80E;
  const { firstTimeHomeOwnerHomeLoan } = section80Ee;
  const { interestHomeLoan } = section24;
  const { savingsAccountInterest } = section80Tta;
  const { savingsAccountInterestSeniorCitizen } = section80Ttb;
  const { charityDonation } = section80G;

  return (
    <div>
      <div>
        <br></br>
        <h4>User Inputs</h4>
        <p>Total Income (CTC): {totalIncome}</p>
        <p>Employees' Provident Fund (EPF): {epf}</p>
        <p>Leave Travel Allowance (LTA): {lta}</p>
        <p>House Rent Allowance (HRA): {hra}</p>
        <p>City Type: {cityType}</p>
        <p>House Rent Annual: {houseRentAnnual}</p>
        <p>Age: {age}</p>
        <p>Parent's Age: {parentAge}</p>
        <p>Has Children: {hasChildren ? "Yes" : "No"}</p>
        <p>Has Daughter: {hasDaughter ? "Yes" : "No"}</p>
        <p>Is Disabled: {isDisabled ? "Yes" : "No"}</p>
        <p>Is Severely Disabled: {isSeverelyDisabled ? "Yes" : "No"}</p>
        <p>Is Dependent Disabled: {isDependentDisabled ? "Yes" : "No"}</p>
        <p>Dependent Disablity Percentage: {dependentDisabledPercentage}</p>
        <p>Annual Interest On Saving Account: {annualInterestSavingsAccount}</p>
        <p>Purchased New House: {purchasedNewHouse ? "Yes" : "No"}</p>
        <p>Has Home Loan: {hasHomeLoan ? "Yes" : "No"}</p>
        <p>Home Loan Annual Interest: {homeLoanAnnualInterest}</p>
        <p>First Time Home Buyer: {firstTimeBuyerHome ? "Yes" : "No"}</p>
        <p>Education Loan Interest: {educationLoanInterest}</p>
      </div>

      <hr></hr>
      <div>
        <h4>Total Income Breakdown</h4>
        <p>Basic Income: {basicIncome}</p>
        <p>Personal Pay: {personalPay}</p>

        <hr></hr>
        <h4>Deduction Calculation</h4>
        <p>Remaining 80C: {remaining80c}</p>

        <h4>Recommended Packages</h4>
        <h5>High Risk</h5>
        <p>Equity Linked Savings Schemes (ELSS): {elss}</p>
        <p>Unit Linked Insurance Plan (ULIP): {ulip}</p>
        <h5>Moderate Risk</h5>
        <p>National Pension System (NPS): {nationalPensionSystem}</p>
        <h5>Low Risk</h5>
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

        <h5>Extra Deductions</h5>
        <h6>Section 10</h6>
        <p>Minimum HRA of Salaried: {minHRASalaried}</p>
        <h6>Section GG</h6>
        <p>Minimum HRA of Non Salaried: {minHRANonSalaried}</p>
        <h6>Section 80CCD(1B)</h6>
        <p>Additional NPS: {additionalNps}</p>
        <h6>Section 80D</h6>
        <p>Mediclaim for Tax Payer: {medicalTaxPayer}</p>
        <p>Mediclaim for Tax Payer's Parents: {medicalParents}</p>
        <h6>Section 80U</h6>
        <p>Self-suffering from Disability: {selfDisability}</p>
        <h6>Section 80DD</h6>
        <p>
          Medical Treatment of a Dependent with Disability:{" "}
          {dependentDisability}
        </p>
        <h6>Section 80E</h6>
        <p>Education Loan: {educationLoan}</p>
        <h6>Section 80EE</h6>
        <p>
          Home Loan Interest for first time home owners:{" "}
          {firstTimeHomeOwnerHomeLoan}
        </p>
        <h6>Section 24</h6>
        <p>Home Loan Interest: {interestHomeLoan}</p>
        <h6>Section 80TTA(1)</h6>
        <p>Savings Account Interest (Individual): {savingsAccountInterest}</p>
        <h6>Section 80TTB</h6>
        <p>
          Savings Account Interest (Senior Citizen):{" "}
          {savingsAccountInterestSeniorCitizen}
        </p>
        <h6>Section 80G</h6>
        <p>Charity Donation: {charityDonation}</p>

        <hr></hr>
        <h4>Taxable Income Calculation</h4>
        <p>Total 80C Deduction amount: {total80cDeduction}</p>
        <p>Total Extra Deduction amount: {totalExtraDeductions}</p>
        <p>Leave Travel Allowance (LTA): {lta}</p>
        <p>Standard Deduction: {stdDeduction}</p>
        <p>Total Deduction amount: {totalDeduction}</p>
        <p>Income after all Deductions: {incomeAfterDeduction}</p>
        <p>Taxable Income: {taxableIncome}</p>
      </div>
    </div>
  );
}
