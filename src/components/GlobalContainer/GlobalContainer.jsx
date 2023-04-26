import React from 'react'
import styles from "./GlobalContainer.module.css"
import {ThemeContext} from '../../Theme.jsx'
export default function GlobalContainer(props) {
  const ThemeData = React.useContext(ThemeContext);
  return (
    <>
      
      <div className={ThemeData.theme ? styles.container : styles.container + ' ' + styles.light_theme}>


        {props.children}
      </div>
    </>);
}