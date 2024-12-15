import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import styles from "./Layout.module.css";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import lightbg from "./../../assets/images/bg-mobile-light.jpg";
import darkbg from "../../assets/images/bg-mobile-dark.jpg";
import desktoplightbg from "../../assets/images/bg-desktop-light.jpg";
import desktopdarkbg from "../../assets/images/bg-desktop-dark.jpg";
import useIsDesktop from "../../useIsDesktop";

function Layout() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const backgroundImag =
    theme === "light"
      ? isDesktop
        ? desktoplightbg
        : lightbg
      : isDesktop
      ? desktopdarkbg
      : darkbg;
  return (
    <div
      className={styles.background}
      style={{ backgroundColor: theme === "light" ? "#fafafa" : "#181824" }}
    >
      <div
        className={styles.backgroundHeader}
        style={{ backgroundImage: `url(${backgroundImag})` }}
      >
        <div className={styles.header}>
          <h1>T O D O</h1>
          <img
            style={{ cursor: "pointer" }}
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
