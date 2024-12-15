import React, { useEffect } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import styles from "./Layout.module.css";
import moon from "../../assets/images/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import sun from "../../assets/images/icon-sun.svg";
import lightbg from "./../../assets/images/bg-mobile-light.jpg";
import darkbg from "../../assets/images/bg-mobile-dark.jpg";

function Layout() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div
      className={styles.background}
      style={{ backgroundColor: theme === "light" ? "#fafafa" : "#181824" }}
    >
      <div
        className={styles.backgroundHeader}
        style={{
          backgroundImage:
            theme === "light" ? `url(${lightbg})` : `url(${darkbg})`,
        }}
      >
        <div className={styles.header}>
          <h1>T O D O</h1>
          <img
            onClick={() => dispatch(toggleTheme())}
            src={theme === "light" ? moon : sun}
            alt="Theme Logo"
          />
        </div>
        <TodoInput />
      </div>
      <div className={styles.content}>
        <TodoList />
      </div>
    </div>
  );
}

export default Layout;
