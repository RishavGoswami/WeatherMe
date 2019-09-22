import React from "react";
import "./InputField-style.scss";

const InputField = props => {
  const { type, onChange, placeholder, className, handleKeyDown } = props;
  return (
    <input
      type={type}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputField;
