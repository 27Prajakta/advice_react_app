import React from "react";
import axios from "axios";
// import "./App.scss";
import "./App.css";

function App() {
  const [advice, setAdivce] = React.useState("");

  const fetchAdivce = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const {
          data: {
            slip: { advice },
          },
        } = res;
        setAdivce(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    fetchAdivce();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdivce}>
          <span>Get the advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
