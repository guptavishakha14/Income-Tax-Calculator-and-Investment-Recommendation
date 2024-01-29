from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.zero_invest_input import Input1
from models.some_invest_input import Input2
from service.some_invest_calculation import TaxCalculatorSomeInvest
from service.zero_invest_calculation import TaxCalculatorZeroInvest

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/calculate_tax_zero_invest")
async def handle_calculate_tax_zero_invest(data: Input1):
    print("data:", data)
    return await TaxCalculatorZeroInvest.calculate_tax(data)


@app.post("/calculate_tax_some_invest")
async def handle_calculate_tax_some_invest(data: Input2):
    print("data:", data)
    return await TaxCalculatorSomeInvest.calculate_tax(data)
