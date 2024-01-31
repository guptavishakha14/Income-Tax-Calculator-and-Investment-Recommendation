from typing import Dict
from models.zero_invest_input import Input1


class TaxCalculatorZeroInvest:
    async def calculate_tax(data: Input1):
        basicIncome, personalPay = basic_calculations(
            data.totalIncome)
        calculateDeductions, total80cDeduction, minHRASalaried, additionalNps, medicalTaxPayer, medicalParents, selfDisability, dependentDisability, educationLoanInterest, firstTimeHomeOwnerHomeLoan, interestHomeLoan, interestSavingsAccount, interestSavingsAccountSeniorCitizen = calculate_deductions(
            150000, data.hasChildren, data.hasDaughter, data.epf, basicIncome, data.cityType, data.hra, data.houseRentAnnual, data.parentAge, data.age, data.isDependentDisabled, data.dependentDisabledPercentage, data.isDisabled, data.isSeverelyDisabled, data.annualInterestSavingsAccount, data.purchasedNewHouse, data.hasHomeLoan, data.homeLoanAnnualInterest, data.firstTimeBuyerHome, data.educationLoanInterest)
        stdDeduction, totalExtraDeductions, totalDeduction = calculate_deduction(
            50000, total80cDeduction, data.lta, minHRASalaried, additionalNps, medicalTaxPayer, medicalParents, selfDisability, dependentDisability, educationLoanInterest, firstTimeHomeOwnerHomeLoan, interestHomeLoan, interestSavingsAccount, interestSavingsAccountSeniorCitizen)
        taxableIncome, incomeAfterDeduction = calculate_taxable_income(
            basicIncome, totalDeduction, personalPay)
        return {
            "totalIncome": data.totalIncome,
            "epf": data.epf,
            "lta": data.lta,
            "hra": data.hra,
            "cityType": data.cityType,
            "houseRentAnnual": data.houseRentAnnual,
            "age": data.age,
            "parentAge": data.parentAge,
            "hasChildren": data.hasChildren,
            "hasDaughter": data.hasDaughter,
            "isDisabled": data.isDisabled,
            "isSeverelyDisabled": data.isSeverelyDisabled,
            "isDependentDisabled": data.isDependentDisabled,
            "dependentDisabledPercentage": data.dependentDisabledPercentage,
            "annualInterestSavingsAccount": data.annualInterestSavingsAccount,
            "purchasedNewHouse": data.purchasedNewHouse,
            "hasHomeLoan": data.hasHomeLoan,
            "homeLoanAnnualInterest": data.homeLoanAnnualInterest,
            "firstTimeBuyerHome": data.firstTimeBuyerHome,
            "educationLoanInterest": data.educationLoanInterest,
            "basicIncome": basicIncome,
            "personalPay": personalPay,
            "calculateDeductions": calculateDeductions,
            "total80cDeduction": total80cDeduction,
            "totalExtraDeductions": totalExtraDeductions,
            "stdDeduction": stdDeduction,
            "totalDeduction": totalDeduction,
            "incomeAfterDeduction": incomeAfterDeduction,
            "taxableIncome": taxableIncome,
        }


def basic_calculations(totalIncome: float) -> float:
    basicIncome = totalIncome * 0.4
    personalPay = totalIncome - basicIncome
    return basicIncome, personalPay


def calculate_deductions(max80cDeduction: float, hasChildren: bool, hasDaughter: bool, epf: float, basicIncome, cityType: str, hra: float, houseRentAnnual: float, parentAge: int, age: int, isDependentDisabled: bool, dependentDisabledPercentage: float, isDisabled: bool, isSeverelyDisabled: bool, annualInterestSavingsAccount: float, purchasedNewHouse: bool, hasHomeLoan: float, homeLoanAnnualInterest: float, firstTimeBuyerHome: bool, educationLoanInterest: float) -> Dict:
    remaining80c = max80cDeduction - epf

    # 80C calculations
    if remaining80c > 50000:
        highRiskInvestment = 0.2 * remaining80c
        moderateRiskInvestment = 0.2 * remaining80c
        lowRiskInvestment = 0.6 * remaining80c

        investments = {
            "termInsurance": round(0.2 * lowRiskInvestment, 2),
            "sukanyaSamruddhi": round(0.2 * lowRiskInvestment, 2) if hasDaughter else 0,
            "fixedDeposit": round(0.1 * lowRiskInvestment, 2),
            "seniorCitizenSavings": round(0.05 * lowRiskInvestment, 2) if age >= 60 else 0,
            "principalRepaymentHomeLoan": round(0.05 * lowRiskInvestment, 2) if hasHomeLoan else 0,
            "tuitionFee": round(0.1 * lowRiskInvestment, 2) if hasChildren else 0,
            "houseStampDutyAndRegistration": round(0.1 * lowRiskInvestment, 2) if purchasedNewHouse else 0,
            "nationalSavingsCertificate": round(0.1 * lowRiskInvestment, 2),
            "publicProvidentFund": round(0.05 * lowRiskInvestment, 2),
            "voluntaryProvidentFund": round(0.05 * lowRiskInvestment, 2),
            "sharesAndBonds": 0,
            "postOfficeDeposit": 0
        }
        totalInvestment = round(sum(investments.values()), 2)
        remainingLowRiskInvestment = round(
            lowRiskInvestment - totalInvestment, 2)
        if remainingLowRiskInvestment > 0:
            existingLowRiskInvestments = [
                v for k, v in investments.items() if v > 0]
            numExistingInvestments = len(existingLowRiskInvestments)
            ratio = round(remainingLowRiskInvestment /
                          numExistingInvestments, 2)
            for key, value in investments.items():
                if value > 0:
                    investments[key] = round(value + ratio, 2)

    else:
        highRiskInvestment = 0.1 * remaining80c
        moderateRiskInvestment = 0.1 * remaining80c
        lowRiskInvestment = 0.8 * remaining80c

        investments = {
            "termInsurance": round(0.25 * lowRiskInvestment, 2),
            "sukanyaSamruddhi": round(0.3 * lowRiskInvestment, 2) if hasDaughter else 0,
            "fixedDeposit": round(0.25 * lowRiskInvestment, 2),
            "seniorCitizenSavings": 0,
            "principalRepaymentHomeLoan": 0,
            "tuitionFee": 0,
            "houseStampDutyAndRegistration": 0,
            "nationalSavingsCertificate": round(0.2 * lowRiskInvestment, 2),
            "publicProvidentFund": 0,
            "voluntaryProvidentFund": 0,
            "sharesAndBonds": 0,
            "postOfficeDeposit": 0
        }
        totalInvestment = round(sum(investments.values()), 2)
        remainingLowRiskInvestment = round(
            lowRiskInvestment - totalInvestment, 2)
        if remainingLowRiskInvestment > 0:
            existingLowRiskInvestments = [
                v for k, v in investments.items() if v > 0]
            numExistingInvestments = len(existingLowRiskInvestments)
            ratio = round(remainingLowRiskInvestment /
                          numExistingInvestments, 2)
            for key, value in investments.items():
                if value > 0:
                    investments[key] = round(value + ratio, 2)

    nps = min(0.1 * basicIncome, moderateRiskInvestment)

    # Minimum HRA of salaried (Section 10)
    if cityType.lower() == 'metropolitan':
        minHRASalaried = min(0.5 * basicIncome, hra,
                             houseRentAnnual - 0.1 * basicIncome)
    else:
        minHRASalaried = min(0.4 * basicIncome, hra,
                             houseRentAnnual - 0.1 * basicIncome)

    # Additional NPS (Section 80CCD(1B))
    additionalNps = min(abs(50000-nps), 50000)

    # Mediclaim (Section 80D)
    if age >= 60:
        medicalTaxPayer = 50000
    else:
        medicalTaxPayer = 25000

    if parentAge >= 60:
        medicalParents = 50000
    else:
        medicalParents = 25000

    # Medical Treatment of a Dependent with Disability (Section 80DD)
    if isDependentDisabled:
        if 40 <= dependentDisabledPercentage < 80:
            dependentDisability = 75000
        elif dependentDisabledPercentage >= 80:
            dependentDisability = 125000
        else:
            dependentDisability = 0
    else:
        dependentDisability = 0

    # Self-suffering from disability (Section 80U)
    if isDisabled:
        selfDisability = 75000
        if isSeverelyDisabled:
            selfDisability = 125000
    else:
        selfDisability = 0

    # Interest Income from Savings account (Section 80TTA(1) - Individual)
    maxIndividualInterestIncome = 10000
    if age < 60:
        interestSavingsAccount = min(
            annualInterestSavingsAccount, maxIndividualInterestIncome)
    else:
        interestSavingsAccount = 0

    # Interest Income from Savings account (Section 80TTB - Senior Citizen)
    maxSeniorCitizenInterestIncome = 50000
    if age >= 60:
        interestSavingsAccountSeniorCitizen = min(
            annualInterestSavingsAccount, maxSeniorCitizenInterestIncome)
    else:
        interestSavingsAccountSeniorCitizen = 0

    # Home Loan Interest (Section 24)
    interestHomeLoan = min(homeLoanAnnualInterest, 200000)

    # Interest on home loan for first time home owners (Section 80EE)
    if firstTimeBuyerHome:
        firstTimeHomeOwnerHomeLoan = min(
            homeLoanAnnualInterest-interestHomeLoan, 50000)
    else:
        firstTimeHomeOwnerHomeLoan = 0

    response = {
        "remaining80c": round(remaining80c, 2),
        "recommendedPackages": [
            {
                "packageName": "High Risk",
                "elss": round(highRiskInvestment, 2),
                "ulip": 0
            },
            {
                "packageName": "Moderate Risk",
                "nationalPensionSystem": round(nps, 2)
            },
            {
                "packageName": "Low Risk",
                **{k: round(v, 2) for k, v in investments.items()}
            }
        ],
        "section10": {
            "minHRASalaried": minHRASalaried
        },
        "sectionGg": {
            "minHRANonSalaried": 0
        },
        "section80Ccd1B": {
            "additionalNps": additionalNps
        },
        "section80D": [
            {
                "medicalTaxPayer": medicalTaxPayer,
                "medicalParents": medicalParents,
            }
        ],
        "section80U": {
            "selfDisability": selfDisability,
        },
        "section80Dd": {
            "dependentDisability": dependentDisability,
        },
        "section80E": {
            "educationLoan": educationLoanInterest
        },
        "section80Ee": {
            "firstTimeHomeOwnerHomeLoan": firstTimeHomeOwnerHomeLoan
        },
        "section24": {
            "interestHomeLoan": interestHomeLoan
        },
        "section80Tta": {
            "savingsAccountInterest": interestSavingsAccount
        },
        "section80Ttb": {
            "savingsAccountInterestSeniorCitizen": interestSavingsAccountSeniorCitizen
        },
        "section80G": {
            "charityDonation": 0
        }
    }

    total80cDeduction = epf + remaining80c
    return response, total80cDeduction, minHRASalaried, additionalNps, medicalTaxPayer, medicalParents, selfDisability, dependentDisability, educationLoanInterest, firstTimeHomeOwnerHomeLoan, interestHomeLoan, interestSavingsAccount, interestSavingsAccountSeniorCitizen


def calculate_deduction(stdDeduction: float, total80cDeduction, lta: float, minHRASalaried, additionalNps, medicalTaxPayer, medicalParents, selfDisability, dependentDisability, educationLoanInterest, firstTimeHomeOwnerHomeLoan, interestHomeLoan, interestSavingsAccount, interestSavingsAccountSeniorCitizen) -> float:

    totalExtraDeductions = minHRASalaried + additionalNps + medicalTaxPayer + medicalParents + selfDisability + \
        dependentDisability + educationLoanInterest + firstTimeHomeOwnerHomeLoan + \
        interestHomeLoan + interestSavingsAccount + interestSavingsAccountSeniorCitizen

    totalDeduction = stdDeduction + total80cDeduction + lta + totalExtraDeductions

    return stdDeduction, totalExtraDeductions, totalDeduction


def calculate_taxable_income(basicIncome, totalDeduction, personalPay) -> float:

    incomeAfterDeduction = basicIncome - totalDeduction
    taxableIncome = personalPay + incomeAfterDeduction

    return taxableIncome, incomeAfterDeduction
