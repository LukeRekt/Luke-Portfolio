import React from 'react'
import { BsMoon } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react"
import {ThemeContext} from '../../Theme.jsx'
import styles from "./ColorTheme.module.css"
export default function ColorTheme(){
   const ThemeData = React.useContext(ThemeContext);

  const [colorTheme, setColorTheme] = useState(0);
  
  return (<div className={styles.container}>
    {ThemeData.theme == false ? (<BsFillSunFill className={styles.sunLogo}/>) : (<BsMoon className={styles.moonLogo}/>)  }
    
  </div>)
}