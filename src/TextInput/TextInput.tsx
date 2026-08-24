import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./TextInput.module.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string
  icon?: ReactNode;
}

const TextInput = ({ label, placeholder, icon, id, ...props }: TextInputProps) => {
  
  const inputId = id || label ? label?.toLocaleLowerCase().replace(/\s+/g, "-") : undefined;

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>{label}</label>
      )}
      <div className={styles.inputWrapper}>
        {icon &&
          <span className={styles.icon}>{icon}</span>
        }
        <input id={inputId} placeholder={placeholder} className={styles.input} {...props}></input>
      </div>
    </div>
  )
};

export default TextInput;