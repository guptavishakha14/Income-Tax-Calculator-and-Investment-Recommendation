import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { inputData } from "./house-rental/MainTable";
import { fetchData } from "./table/table";

function RecommendationButton() {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalIncome = inputData().totalIncome;
    const lta = inputData().lta;
    const hra = inputData().hra;
    const cityType = inputData().cityArea;
    const houseRentAnnual = inputData().annualHouseRent;
    const epf = fetchData().epf;
    const termInsurance = fetchData().termInsurance;
    const sukanyaSamruddhi = fetchData().sukanyaSamruddhi;
    const fixedDeposit = fetchData().fixedDeposit;
    const seniorCitizenSavings = fetchData().seniorCitizenSavings;
    const principalRepaymentHomeLoan = fetchData().principalRepaymentHomeLoan;
    const tuitionFee = fetchData().tuitionFee;
    const houseStampDutyAndRegistration =
      fetchData().houseStampDutyAndRegistration;
    const nationalSavingsCertificate = fetchData().nationalSavingsCertificate;
    const publicProvidentFund = fetchData().publicProvidentFund;
    const voluntaryProvidentFund = fetchData().voluntaryProvidentFund;
    const nationalPensionSystem = fetchData().nationalPensionSystem;
    const elss = fetchData().elss;
    const ulip = fetchData().ulip;
    const sharesAndBonds = fetchData().sharesAndBonds;
    const postOfficeDeposit = fetchData().postOfficeDeposit;
    const total80cDeduction = fetchData().total80cDeduction;

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/calculate_tax_some_invest",
        {
          totalIncome: totalIncome,
          lta: lta,
          hra: hra,
          cityType: cityType,
          houseRentAnnual: houseRentAnnual,
          epf: epf,
          termInsurance: termInsurance,
          sukanyaSamruddhi: sukanyaSamruddhi,
          fixedDeposit: fixedDeposit,
          seniorCitizenSavings: seniorCitizenSavings,
          principalRepaymentHomeLoan: principalRepaymentHomeLoan,
          tuitionFee: tuitionFee,
          houseStampDutyAndRegistration: houseStampDutyAndRegistration,
          nationalSavingsCertificate: nationalSavingsCertificate,
          publicProvidentFund: publicProvidentFund,
          voluntaryProvidentFund: voluntaryProvidentFund,
          nationalPensionSystem: nationalPensionSystem,
          elss: elss,
          ulip: ulip,
          sharesAndBonds: sharesAndBonds,
          postOfficeDeposit: postOfficeDeposit,
          total80cDeduction: total80cDeduction,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      navigate("/already-invest-recommendations", {
        state: {
          totalIncome: response.data.totalIncome,
          lta: response.data.lta,
          hra: response.data.hra,
          cityType: response.data.cityType,
          houseRentAnnual: response.data.houseRentAnnual,
          epf: response.data.epf,
          termInsurance: response.data.termInsurance,
          sukanyaSamruddhi: response.data.sukanyaSamruddhi,
          fixedDeposit: response.data.fixedDeposit,
          seniorCitizenSavings: response.data.seniorCitizenSavings,
          principalRepaymentHomeLoan: response.data.principalRepaymentHomeLoan,
          tuitionFee: response.data.tuitionFee,
          houseStampDutyAndRegistration:
            response.data.houseStampDutyAndRegistration,
          nationalSavingsCertificate: response.data.nationalSavingsCertificate,
          publicProvidentFund: response.data.publicProvidentFund,
          voluntaryProvidentFund: response.data.voluntaryProvidentFund,
          nationalPensionSystem: response.data.nationalPensionSystem,
          elss: response.data.elss,
          ulip: response.data.ulip,
          sharesAndBonds: response.data.sharesAndBonds,
          postOfficeDeposit: response.data.postOfficeDeposit,
          total80cDeduction: response.data.total80cDeduction,
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="app-container">
      {/* <button type="submit" onSubmit={handleSubmit} value="Recommendations" className="button">Recommendations</button> */}
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Recommendations" className="button" />
      </form>
    </div>
  );
}

export default RecommendationButton;
