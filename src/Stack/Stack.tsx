import type { CSSProperties, ReactNode } from "react";
import styles from "./Stack.module.css";

export type StackDirection = "row" | "column";
export type StackAlign = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
export type StackJustify = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

interface StackProps {
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  gap?: number | string
  children?: ReactNode;
}

const Stack = ({ direction, align, justify, gap, children }: StackProps) => {

  const customStyles = {
    "--stack-direction": direction,
    "--stack-align": align,
    "--stack-justify": justify,
    "--stack-gap": gap
  } as CSSProperties;

  return (

    <div
      className={styles.stack}
      style={customStyles}
    >
      {children}
    </div>
  );
};

export default Stack;