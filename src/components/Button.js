import React from "react";
import './Button.css';

const Button = ({ symbol, bgcolor, textColor, handleClick }) => {
    return (
        <div
            onClick={() => handleClick(symbol)}
            className="button-wrapper"
            style={{ backgroundColor: bgcolor, color: textColor }}
        >
            {symbol}
        </div>
    )
}

export default Button;