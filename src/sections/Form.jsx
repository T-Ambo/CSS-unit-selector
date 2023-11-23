import HeaderText from "./HeaderText";
import Dropdown from "../ui/Dropdown";
import React, { useState } from "react";
import FontSizeSection from "./FontSizeSection";

function Form() {
  const options = [
    { value: "font-size", text: "font-size" },
    { value: "spacing", text: "Spacing" },
    { value: "positioning", text: "Positioning" },
    { value: "details and effects", text: "Details and Effects" },
    { value: "flex or grid", text: "Flex or Grid Stuff" },
    { value: "width or height", text: "Width or Height on an Element" },
    // You can add more objects as needed
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (value) => {
    setSelectedOption(value); // Update the selected value in the state
  };

  const renderNextStep = (value) => {
    switch (value) {
      case "font-size":
        // Handle font-size option
        return <FontSizeSection />;
        break;
      case "spacing":
        // Handle spacing option

        break;
      case "positioning":
        // Handle positioning option

        break;
      case "details and effects":
        // Handle details and effects option

        break;
      case "flex or grid":
        // Handle flex or grid stuff option

        break;
      case "width or height ":
        // Handle width or height on an element option

        break;
      default:
        break;
    }
  };

  return (
    <>
      <Dropdown
        options={options}
        label="Choose an option"
        onChange={handleDropdownChange}
      />
      {selectedOption && renderNextStep(selectedOption)}
    </>
  );
}

export default Form;
