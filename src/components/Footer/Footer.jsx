import React, { useContext } from 'react';
import { ThemeContext } from '../../Theme';
import styles from './Footer.module.css'
import { SiFacebook, SiLinkedin, SiTwitter, SiGithub} from "react-icons/si";
export default function Footer() {
    
    const ThemeData = React.useContext(ThemeContext);
    
    return (<div className={styles.container}>
        <div className={styles.firstSection}>
           <div className={ThemeData.theme ? styles.socialMedia : styles.socialMedia  + ' ' + styles.light_mode}>
           <h4>Redes Sociais</h4>
            <div>
            <SiFacebook/>
            <SiTwitter/>
            <SiLinkedin/>
            <SiGithub/>
            </div>
           </div>
          
        </div>
        <span className={ThemeData.theme ? styles.copy : styles.copy  + ' ' + styles.light_mode}>© 2023 Lucas Rodrigues</span>
    </div>)
}