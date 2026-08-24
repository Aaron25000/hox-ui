import { type PropsWithChildren } from "react";
import styles from "./AppLayout.module.css";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
};

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
};

const SidebarSlot = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
};

const Main = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
};

const Footer = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
    </div>
  )
};

AppLayout.Header = Header;
AppLayout.SidebarSlot = SidebarSlot;
AppLayout.Main = Main;
AppLayout.Footer = Footer;

export default AppLayout;