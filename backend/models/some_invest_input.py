from pydantic import BaseModel
from typing import Optional


class Input2(BaseModel):
    totalIncome: float
    lta: float
    hra: float
    cityType: str
    houseRentAnnual: float
    epf: float
    termInsurance: float
    sukanyaSamruddhi: float
    fixedDeposit: float
    seniorCitizenSavings: float
    principalRepaymentHomeLoan: float
    tuitionFee: float
    houseStampDutyAndRegistration: float
    nationalSavingsCertificate: float
    publicProvidentFund: float
    voluntaryProvidentFund: float
    nationalPensionSystem: float
    elss: float
    ulip: float
    sharesAndBonds: float
    postOfficeDeposit: float
    total80cDeduction: float
