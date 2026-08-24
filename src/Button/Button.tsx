import type { CSSProperties, HTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  varient?: 'primary' | 'secondary' | 'ghost';
  padding?: number | string;
}

const Button = ({
  varient = 'primary',
  padding,
  children,
  className = '',
  ...props
}: ButtonProps) => {

  const buttonClasses = `
    ${styles.btn}
    ${styles[varient]}
    ${className}
  `.trim();

  const buttonStyles = {
    "--button-padding": padding
  } as CSSProperties

  return (
    <button
      className={buttonClasses}
      style={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;