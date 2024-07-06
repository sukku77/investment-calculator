export default function UserInput({ onChangeUserInput, userInputs }){

    return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label> Initial Investment  </label>      
                <input type="number" required value={userInputs.initialInvestment} onChange={(event) => onChangeUserInput("initialInvestment", event.target.value)}/>
            </p>
            <p>
                <label> Annual Investment  </label>      
                <input type="number" required value={userInputs.annualInvestment} onChange={(event) => onChangeUserInput("annualInvestment", event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label> Expected Return </label>      
                <input type="number" required value={userInputs.expectedReturn} onChange={(event) => onChangeUserInput("expectedReturn", event.target.value)}/>
            </p>
            <p>
                <label> Duration </label>      
                <input type="number" required value={userInputs.duration} onChange={(event) => onChangeUserInput("duration", event.target.value)}/>
            </p>
        </div>
    </section>
    );
}