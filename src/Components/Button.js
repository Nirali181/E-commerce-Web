import React from "react";

const Button = ({ type, onClick, className, children }) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
