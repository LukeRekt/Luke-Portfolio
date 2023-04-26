import React from 'react'
import styles from "./Projetos.module.css"
import CardTags from "../../components/CardTags/CardTags"
import {ThemeContext} from '../../Theme.jsx'

export default function Projetos(props) {
     const ThemeData = React.useContext(ThemeContext);
  return(
    <>
    <div className={styles.container}>
    <div className={styles.leftCard}>
      <img src={props.imagem}/>
    </div>
      <div className={styles.rightCard}>
      <h3 className={ThemeData.theme ? styles.cardTittle : styles.cardTittle + ' ' + styles.light_mode}>Probot fluxo catalogador</h3>
      <div className={ThemeData.theme ? styles.cardText : styles.cardText + ' ' + styles.light_mode}>
        <p className={ThemeData.theme ? styles.postDate : styles.postDate + ' ' + styles.light_mode}>{props.dataPublic}</p>
        <div className={styles.tagsContainer}>
          {props.tags.map((item) => {
          return <CardTags tag={item}/>
          })}
        </div>
        
        <p className={ThemeData.theme ? styles.contentText : styles.contentText + ' ' + styles.light_mode}>{props.texto} </p>
        <p className={ThemeData.theme ? styles.readMore : styles.readMore + ' ' + styles.light_mode}>Ler mais ></p>
      </div>
       
      </div>
       
    </div>
    </>)
}