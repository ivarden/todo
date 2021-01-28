import React from "react";
import styles from "./Button.module.scss";

const Button = ({ title, text, className }) => (
  <div>
    <button type="submit" className={className || styles.btn} disabled={text.length < 2}>
      {title}
    </button>
  </div>
);

export default Button;
