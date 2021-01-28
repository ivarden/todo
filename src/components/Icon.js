import React from "react";
import styles from "./Icon.module.scss";

const Icon = ({ className, onClick, icon }) => (
  <div className={className || styles.icon} onClick={onClick}>
    <i className={icon} />
  </div>
);

export default Icon;
