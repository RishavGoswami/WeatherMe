import React from "react";

const Image = props => {
  const { image, className, alt, id, onClick, title } = props;
  return (
    <img
      id={id}
      src={image}
      className={className}
      alt={alt}
      title={title}
      onClick={onClick}
    />
  );
};

export default Image;
