import React, { ReactNode } from "react";
import style from "./Alert.module.css";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className={`${style["alert"]} ${style["alert-primary"]}`}>
      {children}
      <button type="button" onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default Alert;
