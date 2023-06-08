import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5050/data/academics")
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));

    console.log("hi");
  }, []);

  const clickHandler = () => {
    axios
      .get("http://localhost:5050/data/academics")
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  return <button onClick={clickHandler}>Request</button>;
}

export default App;
