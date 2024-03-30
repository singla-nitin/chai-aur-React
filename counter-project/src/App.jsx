import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  const plus = () => {
    if (counter < 20) setCounter(counter + 1);
    else {
      alert("Counter Value can't be more than 20.");
    }
  };

  const minus = () => {
    if (counter > 0) setCounter(counter - 1);
    else {
      alert("Counter Value can't be less than 0.");
    }
  };
  return (
    <>
      <h1>Chai-Aur-React | Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={plus}>Add Value</button>
      <br />
      <button onClick={minus}>Remove Value</button>
      <div class="footer">
        <p>© 2024 Nitinsingla, Inc.</p>
      </div>
    </>
  );
}

export default App;
