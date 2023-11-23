import { useState } from "react";
import Form from "./sections/Form";
import "./App.css";
import HeaderText from "./sections/HeaderText";
import InfoText from "./sections/InfoText";

function App() {
  const [showFlow, setShowFlow] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
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
          <Form />
          <button
            onClick={() => setShowFlow(false)}
            style={{ marginTop: "1rem" }}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
