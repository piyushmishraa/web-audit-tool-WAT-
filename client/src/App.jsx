import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const call = async () => {
      const apicall = await fetch("http://localhost:3000/");
      const response = await apicall.text();
      console.log(response);
    };
    call();
  }, []);

  return (
    <>
      <h1>Client is running</h1>
    </>
  );
}

export default App;
