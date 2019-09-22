import React from "react";

const Button = props => {
  const { className, label, style, id } = props;
  return (
    <button className={className} style={style} id={id}>
      {label}
    </button>
  );
};

export default Button;
