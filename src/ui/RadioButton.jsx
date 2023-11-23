import React, { useState } from "react";
import "./RadioButton.css";

const YesNoRadio = ({ initialValue, onChange, groupLabel }) => {
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value); // Callback to lift state to parent component
  };

  return (
    <fieldset className="radio-group">
      {groupLabel && <legend className="group-label">{groupLabel}</legend>}
      <div>
        <label>
          <input
            type="radio"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={selectedOption === "no"}
            onChange={handleOptionChange}
          />
          No
        </label>
      </div>
    </fieldset>
  );
};

export default YesNoRadio;
