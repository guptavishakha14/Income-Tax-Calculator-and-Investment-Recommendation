from models.some_invest_input import Input2


class TaxCalculatorSomeInvest:
    async def calculate_tax(data: Input2):
        basicIncome, personalPay = basic_calculations(
            data.totalIncome)
        return {
            "totalIncome": data.totalIncome,
            "lta": data.lta,
            "hra": data.hra,
            "cityType": data.cityType,
            "houseRentAnnual": data.houseRentAnnual,
            "basicIncome": basicIncome,
            "personalPay": personalPay,
            "epf": data.epf,
            "termInsurance": data.termInsurance,
            "sukanyaSamruddhi": data.sukanyaSamruddhi,
            "fixedDeposit": data.fixedDeposit,
            "seniorCitizenSavings": data.seniorCitizenSavings,
            "principalRepaymentHomeLoan": data.principalRepaymentHomeLoan,
            "tuitionFee": data.tuitionFee,
            "houseStampDutyAndRegistration": data.houseStampDutyAndRegistration,
            "nationalSavingsCertificate": data.nationalSavingsCertificate,
            "publicProvidentFund": data.publicProvidentFund,
            "voluntaryProvidentFund": data.voluntaryProvidentFund,
            "nationalPensionSystem": data.nationalPensionSystem,
            "elss": data.elss,
            "ulip": data.ulip,
            "sharesAndBonds": data.sharesAndBonds,
            "postOfficeDeposit": data.postOfficeDeposit,
            "total80cDeduction": data.total80cDeduction,
        }


def basic_calculations(totalIncome: float) -> float:
    basicIncome = totalIncome * 0.4
    personalPay = totalIncome - basicIncome
    return basicIncome, personalPay
