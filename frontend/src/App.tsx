import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { MainTable } from './components/house-rental/MainTable';

import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import HouseRental from './components/house-rental/HouseRental';
import HouseLoanRepayment from './components/house-rental/HouseLoanRepayment';
import { ChapterVIA } from './components/ChapterVIA';
import TableEx from './components/table/table';
import RecommendationButton from './components/RecommendationButton';
import Footer from './components/Footer';
// import CalculateTax from './components/calculate-tax-new/calculateTax';
import CalculateTaxOld from './components/calculate-tax-old/calculateTaxOld';

import Recommendations from './components/deduction-recommendations/zeroInvestRecommendations';

import Salaryslipme from './components/salary-slip/salary-slip'
import AlreadyInvestRecommendation from './components/deduction-recommendations/someInvestRecommendations'


function App() {
  return (
    <div>
      {/* <TaxContext> */}
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route path='/' element={<Salaryslipme />} />
            <Route path='/more-deductions' element={
              <>
                <HouseRental />
                <HouseLoanRepayment />
                <ChapterVIA />
                <TableEx />
                <RecommendationButton />
                <Footer />
              </>
            } />
            <Route path='/already-invest-recommendations' element={< AlreadyInvestRecommendation/>} />
            {/* <Route path='/calculate-tax-new' element={<CalculateTax />} /> */}
            <Route path='/calculate-tax-old' element={<CalculateTaxOld />} />
            <Route path="/zero-invest-recommendations" element={<Recommendations/>} />
          </Routes>
        </Router>
      {/* </TaxContext> */}


    </div>
  );
}

export default App;
