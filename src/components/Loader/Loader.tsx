import React from "react";
import { placeholders } from "./placeholders";
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-40 overflow-hidden relative">
      <div className="flex flex-col items-start space-y-2">
        {placeholders.map((item, index) => (
          <p key={`${item} ${index}`}>{item}</p>
        ))}
      </div>
      <div className={styles.textLayout}/>
    </div>
  );
};

export default Loader;
