import { type PropsWithChildren } from 'react';
import styles from './Sidebar.module.css';
import Button from '../Button';


interface SidebarItemProps extends PropsWithChildren {
  active?: boolean;
  onClick?: () => void;
}


const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  );
};

const Nav = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.nav}>
      {children}
    </div>
  );
};

const Item = ({ active, onClick, children }: SidebarItemProps) => {
  return (
    <Button
      varient='ghost'
      className={active ? styles.itemActive : ""}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Footer = ({ children }: PropsWithChildren) => {
  return (
    <Button varient='ghost'>
      {children}
    </Button>
  );
};

Sidebar.Nav = Nav;
Sidebar.Item = Item;
Sidebar.Footer = Footer;

export default Sidebar;