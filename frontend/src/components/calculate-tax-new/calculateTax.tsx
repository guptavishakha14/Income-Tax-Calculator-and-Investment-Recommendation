import React, { useState, useEffect } from 'react'
import { getData } from '../salary-slip/salary-slip';
import './calculateTax.css';
import { useLocation } from 'react-router-dom';
interface UserProps {
  name: string;
  age: number;
  country: string;
  children?: React.ReactNode; // 👈️ for demo purposes
}

const CalculateTax = () => {

  const location = useLocation();
  const data = getData();
  const income = data.TotalIncome;
  const [tax, setTax] = useState(0);
  const [taxSlab1, setTaxSlab] = useState('0-3 Lakhs');
  const [taxRate, setTaxRate] = useState(0);

  const [userData, setUserData] = useState({
    income: income,
    taxable: income - 50000, 
    taxSlab: '0-3 Lakhs',
    taxRate: 0,
    totalTax: 0,
    netIncome: 0
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  console.log(income);
  let taxableIncome = income - 50000;


  useEffect(() => {
    setUserData(prevState => ({
      ...prevState,
      basic: 0,
      taxable: userData.income - 50000,
      // totalTax: userData.taxable * userData.taxRate / 100,
      // netIncome: userData.taxable - userData.totalTax,
    }));
    // For Tax slabs
    if (taxableIncome < 700000) {
      setUserData(prevUserData => ({
        ...prevUserData,
        taxSlab: '0-7 Lakhs',
        taxRate: 0,
        totalTax: 0,
        netIncome: userData.taxable - userData.totalTax
      }));
      console.log("Total tax 1:", userData.totalTax)
    } else if (taxableIncome < 900000) {
      setUserData(prevUserData => ({
        ...prevUserData,
        taxSlab: '6-9 Lakhs',
        taxRate: 10,
        totalTax: ((userData.taxable-600000) * 0.1) + 15000,
        netIncome: userData.taxable - userData.totalTax
      }));
      console.log("Total tax 2:", userData.totalTax)
    } else if (taxableIncome < 1200000) {
      setUserData(prevUserData => ({
        ...prevUserData,
        taxSlab: '9-12 Lakhs',
        taxRate: 15,
        totalTax: ((userData.taxable-900000) * 0.15) + 45000,
        netIncome: userData.taxable - userData.totalTax
      }));
      console.log("Total tax 3:", userData.totalTax)

    } else if (taxableIncome < 1500000) {
      setUserData(prevUserData => ({
        ...prevUserData,
        taxSlab: '12-15 Lakhs',
        taxRate: 20,
        totalTax: ((userData.taxable-1200000) * 0.2) + 90000,
        netIncome: userData.taxable - userData.totalTax
      }));
      console.log("Total tax 4:", userData.totalTax)
      // setTaxSlab(' 6-9 Lakhs');

    } else if (taxableIncome > 1500000) {
      setUserData(prevUserData => ({
        ...prevUserData,
        taxSlab: ' 6-9 Lakhs',
        taxRate: 30,
        totalTax: ((userData.taxable-1500000) * 0.3) + 150000 ,
        netIncome: userData.taxable - userData.totalTax
      }));
    }
  }, [income]);
  // console.log("tax :" + tax + " tax Slab :" + taxSlab1 + " taxRate " + taxRate);

  return (
    <div className='calculate-container'>
      <h1 className='heading'>USING NEW REGIME</h1>
      {/* calculated Tax is : {"tax :" + tax + " tax Slab :" + taxSlab1 + " taxRate :" + taxRate} */}
      <div className='tax-div'>
        <div>
          <label htmlFor="income">Income</label>
          <input value={userData.income} type="number" name="income" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="taxable-income">Taxable income</label>
          <input value={userData.taxable} onChange={handleInputChange} type="number" name="taxable" />
        </div>
      </div>

      <div className='tax-div'>
        <div>
          <label htmlFor="tax-slab">Tax Slab </label>
          <input value={userData.taxSlab} onChange={handleInputChange} type="text" name="taxSlab" />
        </div>
        <div>
          <label htmlFor="tax-rate">Tax Rate</label>
          <input value={userData.taxRate} onChange={handleInputChange} type="number" name="taxRate" />
        </div>
      </div>

      <div className='tax-div'>
        <div>
          <label htmlFor="total-tax">Total tax  </label>
          <input value={userData.totalTax} onChange={handleInputChange} type="number" name="totalTax" />
        </div>
        <div>
          <label htmlFor="income-tax">Net Income</label>
          <input value={userData.netIncome} onChange={handleInputChange} type="number" name="netIncome" />
        </div>
      </div>

    </div>
  )
}

export default CalculateTax