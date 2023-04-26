import styles from "./Header.module.css"
import React from 'react'
import ColorTheme from "../ColorTheme/ColorTheme"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {ThemeContext} from '../../Theme.jsx'
export default function Header() {
  const ThemeData = React.useContext(ThemeContext);
  return (
    <>
      <div className={styles.container}>
        <div className={ThemeData.theme == true ? styles.Logo : styles.Logo + ' ' + styles.light_font}>Luke<span>{`</`}<b>DEV</b>{`>`}</span></div>
        <div className={styles.Nav}>
        <ul className={ThemeData.theme ? styles.NavList : styles.NavList + ' ' + styles.light_theme}>
        <li>Blog</li>
        <li>Sobre</li>
        <li>Contato</li>
        <li><BsGithub style={{color: "#8533ff"}}/></li>
        <li><BsLinkedin style={{color: "#8533ff"}}/></li>
          <li onClick={()=>ThemeData.changeTheme()}><ColorTheme /></li>
        </ul>
        </div>
      </div>
    </>);
}