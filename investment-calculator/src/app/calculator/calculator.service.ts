import { Injectable } from "@angular/core";
import type { Payload } from "./calculator.model";

@Injectable({ providedIn: "root" })
export class CalculatorService {

  calculateInvestmentResults(payload: Payload) {
    const annualData = [];
    let investmentValue = payload.initialInvestment;

    for (let i = 0; i < payload.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (payload.expectedReturn / 100);
      investmentValue += interestEarnedInYear + payload.annualInvestment;
      const totalInterest =
        investmentValue - payload.annualInvestment * year - payload.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: payload.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: payload.initialInvestment + payload.annualInvestment * year,
      });
    }

    return annualData;
  }
}
