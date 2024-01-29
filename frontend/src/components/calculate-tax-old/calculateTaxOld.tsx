import React, { useState, useEffect } from "react";
import { getData } from "../salary-slip/salary-slip";
import "./calculateTaxOld.css";
import { useLocation } from "react-router-dom";

const CalculateTaxOld = () => {
  const location = useLocation();
  const data = getData();
  const income = data.TotalIncome;
  const HRA = data.HRA;
  const LTA = data.LTA;
  const EPF = data.EPF;
  const [tax, setTax] = useState(0);
  const [taxSlab1, setTaxSlab] = useState("0-3 Lakhs");
  const [taxRate, setTaxRate] = useState(0);

  const [userData, setUserData] = useState({
    income: income,
    taxable: income - 50000,
    taxSlab: "0-3 Lakhs",
    taxRate: 0,
    totalTax: 0,
    netIncome: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(income);
  let taxableIncome = income - 50000;

  useEffect(() => {
    setUserData((prevState) => ({
      ...prevState,
      basic: 0,
      taxable: userData.income - 50000,
    }));

    // For Tax slabs
    if (taxableIncome <= 500000) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        taxSlab: "0-5 Lakhs",
        taxRate: 0,
        totalTax: 0,
        netIncome: userData.taxable - userData.totalTax,
      }));
    } else if (taxableIncome <= 1000000) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        taxSlab: "5-10 Lakhs",
        taxRate: 20,
        totalTax: (userData.taxable - 500000) * 0.2 + 12500,
        netIncome: userData.taxable - userData.totalTax,
      }));
      console.log("Total tax 2:", userData.totalTax);
    } else if (taxableIncome > 1000000) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        taxSlab: " > 10 Lakhs",
        taxRate: 30,
        totalTax: (userData.taxable - 1000000) * 0.3 + 112500,
        netIncome: userData.taxable - userData.totalTax,
      }));
    }
  }, [income]);
  // console.log("tax :" + tax + " tax Slab :" + taxSlab1 + " taxRate " + taxRate);

  return (
    <>
      <div className="calculate-container">
        <h1 className="heading">USING OLD REGIME</h1>
        {/* calculated Tax is : {"tax :" + tax + " tax Slab :" + taxSlab1 + " taxRate :" + taxRate} */}
        <div className="tax-div">
          <div>
            <label htmlFor="income">Income</label>
            <input
              value={userData.income}
              type="number"
              name="income"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="taxable-income">Taxable income</label>
            <input
              value={userData.taxable}
              onChange={handleInputChange}
              type="number"
              name="taxable"
            />
          </div>
        </div>

        <div className="tax-div">
          <div>
            <label htmlFor="tax-slab">Tax Slab </label>
            <input
              value={userData.taxSlab}
              onChange={handleInputChange}
              type="text"
              name="taxSlab"
            />
          </div>
          <div>
            <label htmlFor="tax-rate">Tax Rate</label>
            <input
              value={userData.taxRate}
              onChange={handleInputChange}
              type="number"
              name="taxRate"
            />
          </div>
        </div>

        <div className="tax-div">
          <div>
            <label htmlFor="total-tax">Total tax </label>
            <input
              value={userData.totalTax}
              onChange={handleInputChange}
              type="number"
              name="totalTax"
            />
          </div>
          <div>
            <label htmlFor="income-tax">Net Income</label>
            <input
              value={userData.netIncome}
              onChange={handleInputChange}
              type="number"
              name="netIncome"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculateTaxOld;
