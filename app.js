import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./Store/index";
import { useState } from "react";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const addInterest = account*0.05;
  const charges = account*0.15;
  const { depositMoney, withdrawMoney, interestMoney, chargesMoney} = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [userInput, setUserInput] = useState(0);
  const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(Number(userInput));
  setUserInput(0)
  };
  
  console.log(account);
  return (
    <div className="App">
      <h1>Current Balance: {account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <form class="depositAmount">
        <label>
          Enter Deposit Amount:
          <input type="number" />
        </label>
      </form>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <form class="withdrawAmount">
        <label>
          Enter Withdraw Amount:
          <input type="number" />
        </label>
      </form>
      <button onClick={() => interestMoney(addInterest)}>Add Interest</button>
      <button onClick={() => chargesMoney(charges)}>Charges</button>
      <form className="Form" onClick={handleSubmit}>
        <label>
        Deposit Amount
        <input
        type="number"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        />
        </label>
        <button type="submit">Deposit</button>
      </form>
      <form className="Form" onClick={handleSubmit}>
        <label>
        Withdrawal Amount
        <input
        type="number"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        />
        </label>
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}

export default App;
