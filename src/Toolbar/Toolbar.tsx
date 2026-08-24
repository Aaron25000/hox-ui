import type { PropsWithChildren } from "react"
import styles from "./Toolbar.module.css";
import Button from "../Button";

const Toolbar = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.toolbar}>
      {children}
    </div>
  )
};

const Item = ({ children }: PropsWithChildren) => {
  return (
    <Button varient="ghost">
      {children}
    </Button>
  )
};

Toolbar.Item = Item;

export default Toolbar;