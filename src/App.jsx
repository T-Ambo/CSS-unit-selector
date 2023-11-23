import { useState } from "react";
import Form from "./sections/Form";
import "./App.css";
import HeaderText from "./sections/HeaderText";
import InfoText from "./sections/InfoText";

function App() {
  const [showFlow, setShowFlow] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {!showFlow ? (
        <>
          <InfoText />
          <button
            onClick={() => setShowFlow(true)}
            style={{ marginTop: "1rem" }}
          >
            Start
          </button>
        </>
      ) : (
        <>
          <HeaderText />
          <div className="left-side">
            <Form />
            <button
              onClick={() => setShowFlow(false)}
              style={{ marginTop: "1rem" }}
            >
              Restart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
