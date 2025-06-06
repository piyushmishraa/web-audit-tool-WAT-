import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("");
  //testing api connection
  useEffect(() => {
    const call = async () => {
      const apicall = await fetch("http://localhost:3000/");
      const response = await apicall.text();
      console.log(response);
    };
    call();
  }, []);

  //handle form submission
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <h1>Client is running</h1>
      <form onSubmit={handleClick}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="please enter website url"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
