import LOGO from '../assets/investment-calculator-logo.png';

export default function Header(){
    return(
        <header id="header">
          <img alt="Money bag Logo" src={LOGO}/>
          <h1> Investement Calculator</h1>
        </header>
    );
}