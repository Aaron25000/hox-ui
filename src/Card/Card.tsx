import type { CSSProperties, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  padding?: number | string;
  children: ReactNode;
}

const Card = ({ padding, children }: CardProps) => {
  const customStyles = {
    "--card-padding": padding
  } as CSSProperties;

  return (
    <div
      className={styles.card}
      style={customStyles}
    >
      {children}
    </div>
  );
};

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const Body = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;

export default Card;