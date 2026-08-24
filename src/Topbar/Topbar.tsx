import type React from 'react';
import styles from './Topbar.module.css';

interface TopbarProps {
  logo?: React.ReactNode;
  items?: React.ReactNode[];
  actions?: React.ReactNode[];
}

const Topbar: React.FC<TopbarProps> = ({ items = [], actions }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {actions && (
        <div className={styles.action}>
          {actions.map((action, idx) => (
            <div key={idx}>{action}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topbar;