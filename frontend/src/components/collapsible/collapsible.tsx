import React, { useState } from 'react'
// import TextField from '@mui/material/TextField';
// import './collapsableRecommendations.css';
// import Collapsible from 'react-collapsible';
// import { getData } from '../salary-slip/salary-slip';
// // import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


// export default function CollapsibleRecommendation() {
//     const data = getData();
//     const income = data.TotalIncome;
//     const [userData, setUserData] = useState({
//         cityType: "",
//         houseRentAnnual: "",
//         age: "",
//         parentAge: "",
//         hasChildren: "",
//         hasDaughter: "",
//         isDisabled: "",
//         isSeverelyDisabled: "",
//         isDependantDisabled: "",
//         dependantDisablityPercent: "",
//         annualInterestOnSavingAccount: "",
//         purchasedNweHouse: "",
//         hasHomeLoan: "",
//         homeLoanAnnualInterest: "",
//         firstTimeHomeBuyer: "",
//         educationLoanInterest: ""
//     })     

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setUserData(prevState => ({
//             ...prevState,
//             [e.target.name]: e.target.value
//         }));
//     };

//     return (
//         <form className='bg'>
//             <div className='salaryslip_container'>
//                 <div className='Collapsible_recommendation' >
//                     <hr></hr>
//                     <Collapsible trigger="Add additional information for recommendations">
//                         <div className="containers containers_collapsable">
//                             <div>
//                                 <label>City Type: </label>
//                                 <TextField
//                                     required
//                                     label="Metro(M)/Non Metro(NM)"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="cityType"
//                                     value={userData.cityType}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Age: </label>
//                                 <TextField
//                                     required
//                                     label="age"
//                                     type="number"
//                                     variant="standard"
//                                     color="success"
//                                     name="age"
//                                     value={userData.age}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Have Childern: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="hasChildren"
//                                     value={userData.hasChildren}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Disabled: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="isDisabled"
//                                     value={userData.isDisabled}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Dependent Disabled: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="isDependantDisabled"
//                                     value={userData.isDependantDisabled}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Annual Interest on Savings Account: </label>
//                                 <TextField
//                                     required
//                                     label="Annual Interest on Savings Account"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="annualInterestOnSavingAccount"
//                                     value={userData.annualInterestOnSavingAccount}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Have Home Loan: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="hasHomeLoan"
//                                     value={userData.hasHomeLoan}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>First Time Home Buyer: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="firstTimeHomeBuyer"
//                                     value={userData.firstTimeHomeBuyer}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="containers containers_collapsable containers_collapsable_right">
//                             <div>
//                                 <label>Annual Rent: </label>
//                                 <TextField
//                                     required
//                                     label="House Rent Annual"
//                                     type="number"
//                                     variant="standard"
//                                     color="success"
//                                     name="houseRentAnnual"
//                                     value={userData.houseRentAnnual}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Parent Age: </label>
//                                 <TextField
//                                     label="parentAge"
//                                     type="number"
//                                     variant="standard"
//                                     color="success"
//                                     name="parentAge"
//                                     value={userData.parentAge}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Have Daughter: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="hasDaughter"
//                                     value={userData.hasDaughter}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Severely Disabled: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="isSeverelyDisabled"
//                                     value={userData.isSeverelyDisabled}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Dependant Disablity Percent: </label>
//                                 <TextField
//                                     required
//                                     label="Dependant Disablity Percent"
//                                     type="number"
//                                     variant="standard"
//                                     color="success"
//                                     name="dependantDisablityPercent"
//                                     value={userData.dependantDisablityPercent}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Purchased Nwe House: </label>
//                                 <TextField
//                                     required
//                                     label="Yes / No"
//                                     type="text"
//                                     variant="standard"
//                                     color="success"
//                                     name="purchasedNweHouse"
//                                     value={userData.purchasedNweHouse}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             {/* <div>
//                                 <label>Purchased New House: </label>
//                                 <FormControl required component="div" variant="standard" color="primary">
//                                     <InputLabel>New House</InputLabel>
//                                     <Select name="purchasedNewHouse" value={userData.purchasedNweHouse} onChange={handleInputChange}>
//                                         <MenuItem value="yes">Yes</MenuItem>
//                                         <MenuItem value="no">No</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </div> */}
//                             <div>
//                                 <label>Home Loan Annual Interest: </label>
//                                 <TextField
//                                     required
//                                     label="Home Loan Annual Interest"
//                                     type="number"
//                                     variant="standard"
//                                     color="success"
//                                     name="homeLoanAnnualInterest"
//                                     value={userData.homeLoanAnnualInterest}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label>Education Loan Interest: </label>
//                                 <TextField
//                                     required
//                                     label="Education Loan Interest"
//                                     type="number"
//                                     variant="standard"
//                                     color="success"
//                                     name="educationLoanInterest"
//                                     value={userData.educationLoanInterest}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>
//                     </Collapsible>
//                 </div>
//             </div>
//         </form>
//     )
// }