import React from "react";

export const Button = ({ id, children, text, isActive, onClickHandler }) => {
  const handleClick = () => {
    onClickHandler(id);
  };

  return (
    <div
      className="button"
      onClick={handleClick}
      style={{
        backgroundColor: isActive ? "#464eb8" : "",
      }}
    >
      <div className="button-icon">{children}</div>
      <div className="button-title">{text}</div>
    </div>
  );
};
