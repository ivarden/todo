import React from "react";
import styles from './Input.module.scss'

const Input = ({ type, name, placeholder, value, onChange, className }) => (
  <input
    type={name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className || styles.input}
  />
);

export default Input;
