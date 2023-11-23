import "./AnswerText.css";

const AnswerText = ({ text }) => {
  return (
    <div
      style={{
        background: "beige",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <h2>Answer</h2>
      <h4 style={{ textAlign: "left", padding: "1rem" }}>{text}</h4>
    </div>
  );
};

export default AnswerText;
