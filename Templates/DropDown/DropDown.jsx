import React from "react";
import "./DropDown.css";
import { Link } from "react-router-dom";
import { colors, fontFamily, fontSize } from "../../util/theme";
const DropDown = () => {
  const styles = {
    submenu: {
      position: "absolute",
      top: "20px",
      left: "0",
      background: "rgba(0, 0, 0, 0.6)",
      listStyle: "none",
      padding: "10px 0px",
      margin: "0",
      width: "220px",
      boxShadow: "0 3px 3px rgba(0, 0, 0, 0.1)",
      display: "none",
      zIndex: "999",
    },
    dropdown: {
      position: "relative",
      listStyle: "none",
    },
    categoryLi: {
      padding: "10px 20px 0px",
      fontSize: fontSize.medium,
    },
    linksLG: {
      fontFamily: fontFamily.LatoRegular,
      fontSize: fontSize.normal,
      color: colors.white,
    },
    linkStyle: {
      fontFamily: fontFamily.LatoRegular,
      fontSize: fontSize.normal,
      color: colors.grayColor,
    },
  };

  return (
    <li style={styles.dropdown} className="dropdown">
      <Link style={styles.linkStyle} to="/shop">
        Shop
      </Link>
      <ul className="sub-menu" style={styles.submenu}>
        <li style={styles.categoryLi}>
          <Link style={styles.linksLG} to="/shop/1">
            Kategorija 1
          </Link>
        </li>
        <li style={styles.categoryLi}>
          <Link style={styles.linksLG} to="/shop">
            Kategorija 2
          </Link>
        </li>
        <li style={styles.categoryLi}>
          <Link style={styles.linksLG} to="/shop">
            Kategorija 3
          </Link>
        </li>
        <li style={styles.categoryLi}>
          <Link style={styles.linksLG} to="/shop">
            Kategorija 4
          </Link>
        </li>
        <li style={styles.categoryLi}>
          <Link style={styles.linksLG} to="/shop">
            Kategorija 5
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default DropDown;
