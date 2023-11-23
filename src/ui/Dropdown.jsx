import React, { useState } from "react";
import "./Dropdown.css"; // Your CSS file for styling

const Dropdown = ({ options, label, onChange }) => {
  const placeholder = "Select an option";

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
    setSelectedOption(selectedValue);
  };

  return (
    <div className="dropdown">
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown-select"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text || option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
