
import type { ReactNode } from "react";
import styles from "./Dialog.module.css";
import Stack from "../src/Stack";
import Button from "../Button";
import { CloseIcon } from "../../hox-icons/Icons";

export interface DialogProps {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const Dialog = ({ title, isOpen, onClose, children }: DialogProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.dialog}>
        <Stack gap="1.5rem">
          <Stack direction="row" justify="space-between">
            <h3>{title}</h3>
            <Button
              varient="ghost"
              padding="2px"
              onClick={onClose}
            >
              <CloseIcon />
            </Button>
          </Stack>
          {children}
        </Stack>
      </div>
    </div>
  );
};



export default Dialog;