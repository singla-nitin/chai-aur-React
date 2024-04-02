import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setlength] = useState(5);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  /* useRef hook is used when you have to take a reference  */

  const passwordRef = useRef(null);

  /* usecallback is mainly used for memoization it means for optimization purposes , like in this particular case jitna password generate hogya utna thik hai baki ka jarurat anusar aur generate hoga aur add hojayega back wale mein ,pura password firse generate nhi hoga, it stores max to max password possible in cache , in this project hum sirf useEffect bhi use kr skte the pr due to optimization we have used useCallback also  */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "1234567890";
    if (charallowed) str += "!@#$%^&*(){}[]<>/?|`.";

    for (let i = 1; i <= length; i++) {
      let num = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(num);

      setpassword(pass);
    }
  }, [length, numberallowed, charallowed, setpassword]);

  const copyPasstoClipboard = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, charallowed]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-blue-400 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasstoClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={5}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(event) => {
              setlength(event.target.value);
            }}
          />
          <label>length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={() => {
              setnumberallowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charallowed}
            id="characterInput"
            onChange={() => {
              setcharallowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
