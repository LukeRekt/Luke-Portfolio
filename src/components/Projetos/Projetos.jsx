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
      <h3>Probot fluxo catalogador</h3>
      <div className={styles.cardText}>
        <p className={styles.postDate}>{props.dataPublic}</p>
        <div className={styles.tagsContainer}>
          {props.tags.map((item) => {
          return <CardTags tag={item}/>
          })}
        </div>
        
        <p className={styles.contentText}>{props.texto} </p>
        <p className={styles.readMore}>Ler mais ></p>
      </div>
       
      </div>
       
    </div>
    </>)
}