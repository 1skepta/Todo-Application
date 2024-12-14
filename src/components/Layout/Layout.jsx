import React from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import styles from "./Layout.module.css";
import mooon from "../../assets/images/icon-moon.svg";

function Layout() {
  return (
    <div className={styles.background}>
      <div className={styles.backgroundHeader}>
        <div className={styles.header}>
          <h1>T O D O</h1>
          <img src={mooon} alt="Theme Logo" />
        </div>
        <TodoInput />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default Layout;
