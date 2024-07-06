import { calculateInvestmentResults,formatter } from '../util/investment.js';

export default function Result({userInputs}){
    //import function to calculate investement results and assign to variable to use later
    const derivedResults = calculateInvestmentResults(userInputs);
    //initialInvestment can be derived from the first element , this variable is required to derive totalInterest 
    const initialInvestment = 
        derivedResults[0].valueEndOfYear -
        derivedResults[0].interest -
        derivedResults[0].annualInvestment;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {derivedResults.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    initialInvestment;

                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}> 
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}                
            </tbody>

        </table>

    );
}