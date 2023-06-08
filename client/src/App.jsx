import React, { useEffect } from "react";
import axios from "axios";
import { client } from "../utils/client";
import { AcademicsQueries } from "../utils/queries";

function App() {
  useEffect(() => {
    client.fetch(AcademicsQueries()).then((data) => console.log(data));
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
