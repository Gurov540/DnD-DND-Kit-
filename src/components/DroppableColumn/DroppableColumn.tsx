import React from "react";
import styles from "./DroppableColumn.module.css";

export const DroppableColumn: React.FC = () => {
  return (
    <>
      <div className={styles.DropContainer}>
        <div className={styles.Header}>
          <h3 className={styles.ColumnName}></h3>
          <span className={styles.Counter}></span>
        </div>
        <div className={styles.Column}></div>
      </div>
    </>
  );
};
