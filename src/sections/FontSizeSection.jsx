import Dropdown from "../ui/Dropdown";
import YesNoRadio from "../ui/RadioButton";
import React, { useState } from "react";
import data from "../finalAnswers.json";
import AnswerText from "./AnswerText";

function FontSizeSection() {
  const options = [
    { value: "html", text: "The <html> element" },
    { value: "body", text: "The <body> element" },
    {
      value: "text",
      text: "Text related element <h1> -> <h6>, <p>, <ol>, <ul>, etc.",
    },
    { value: "inline", text: "Inline element <a>, <span>, <strong>, etc." },
    {
      value: "layout",
      text: "Layout element <div>, <nav>, <main>, <aside>,<footer>, etc.",
    },
    // You can add more objects as needed
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (value) => {
    setSelectedOption(value); // Update the selected value in the state
  };

  const handleAction = (value) => {
    setSelectedValue(value);
  };

  const renderNextStep = (value) => {
    switch (value) {
      case "html":
        const text = data.answers.find(
          (item) => item.key === "No I guess not"
        ).text;
        console.log(selectedValue && selectedValue === "no");
        return (
          <>
            <YesNoRadio
              initialValue={"Yes"}
              onChange={handleAction}
              groupLabel="Do you need to set a font-size here?"
            />
            {selectedValue && (
              <>
                {selectedValue && selectedValue === "no" ? (
                  <AnswerText text={text} />
                ) : null}
              </>
            )}
          </>
        );
        break;
      case "body":
        break;
      case "text":
        break;
      case "inline":
        break;
      case "layout":
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Dropdown
        options={options}
        label="Which of these are you selecting to declare the font-size?"
        onChange={handleDropdownChange}
      />
      {selectedOption && renderNextStep(selectedOption)}
    </>
  );
}

export default FontSizeSection;
