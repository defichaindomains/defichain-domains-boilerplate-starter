import React, { useState } from "react";

const Select = ({ options, handleChange }) => {
  return (
    <select className="select select-bordered w-36 " onChange={handleChange}>
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
