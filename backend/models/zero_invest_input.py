from pydantic import BaseModel
from typing import Optional


class Input1(BaseModel):
    totalIncome: float
    epf: float
    lta: float
    hra: float
    bonus: Optional[str] = None
    email: Optional[str] = None
    mobile: Optional[str] = None
    name: Optional[str] = None
    cityType: str
    houseRentAnnual: float
    age: int
    parentAge: int
    hasChildren: bool
    hasDaughter: bool
    isDisabled: bool
    isSeverelyDisabled: bool
    isDependentDisabled: bool
    dependentDisabledPercentage: float
    annualInterestSavingsAccount: float
    purchasedNewHouse: bool
    hasHomeLoan: bool
    homeLoanAnnualInterest: float
    firstTimeBuyerHome: bool
    educationLoanInterest: float
