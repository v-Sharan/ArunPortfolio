import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/data/subject_handled")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <h1 className="text-xl">Hi</h1>;
}

export default App;
