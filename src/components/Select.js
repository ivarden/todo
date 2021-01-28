import React from "react";

const Select = ({ value, options, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        backgroundColor: `${value}`,
      }}
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
