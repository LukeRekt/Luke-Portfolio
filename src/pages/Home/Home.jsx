import styles from "./Home.module.css"
import React, { useEffect, useState } from "react"
import { BsArrowDown } from "react-icons/bs";
import {ThemeContext} from '../../Theme.jsx'
import { SiJavascript, SiReact,SiNodedotjs, SiAmazonaws, SiMongodb, SiPython, SiTypescript } from "react-icons/si";
import Projetos from "../../components/Projetos/Projetos"
import animes from "./react-site-animes.png"
import servicedesk from "./servicedesk.svg"
import benditoburguer from "./benditoburguer.png"


export default function Home() {
   const ThemeData = React.useContext(ThemeContext);
   const [cursor, setCursor] = useState(false)
   useEffect(() => {
    let intervalo = setInterval(() => {
      setCursor(!cursor)
     }, 1000) 
     return () => clearInterval(intervalo);
   }, [cursor])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
        <h1 style={{background: "rgba(255, 255, 255, 0.05)", width: "60%", padding: "0.4vw", borderRadius: "5px", position: "relative"}} className={ThemeData.theme == true ? styles.dark_font : styles.light_font}>Olá! <span className={styles.spinHand}>👋</span></h1>
        <h1 className={ThemeData.theme == true ? styles.dark_font : styles.light_font}>Meu nome é Lucas </h1>
        <p>um Engenheiro de Software <span style={{opacity: cursor ? "1" : "0", fontWeight: "800"}}>|</span></p>

        </div>
        <div className={styles.techSection}>
        <p className={ThemeData.theme == true ? styles.dark_font : styles.light_font}>Principais techs que utilizo <BsArrowDown/></p>
          <div className={styles.techSectionTechs}>
            
            <SiJavascript className={ThemeData.theme == true ? styles.techIconStyleDark : styles.techIconStyle}/>
            <SiTypescript className={ThemeData.theme == true ? styles.techIconStyleDark : styles.techIconStyle}/>
            <SiReact className={ThemeData.theme == true ? styles.techIconStyleDark : styles.techIconStyle}/>
            <SiNodedotjs className={ThemeData.theme == true ? styles.techIconStyleDark : styles.techIconStyle}/>
            <SiAmazonaws className={ThemeData.theme == true ? styles.techIconStyleDark : styles.techIconStyle}/>
            <SiMongodb className={ThemeData.theme == true ? styles.techIconStyleDark : styles.techIconStyle}/>
            <SiPython className={ThemeData.theme == true ? styles.techIconStyleDark : styles.techIconStyle}/>

          </div>
        </div>
        

        <p className={ThemeData.theme == true ? styles.dark_font : styles.light_font}>Meus projetos<BsArrowDown/></p>
        <div className={styles.blogPosts}>
        <Projetos imagem={animes}
          nomeProjeto="Zap Animes"
          tags={["#React.js", "#Node.js", "#MongoDB"]}
          texto="Site de animes criado usando a stack M.E.R.N 
        "
         dataPublic="25 de Abril de 2023." />
                  <Projetos imagem={servicedesk}
          nomeProjeto="Portal Service Desk"
          tags={["#Next.js", "#Node.JS", "#MongoDB"]}
          texto="Portal desenvolvido com intúito de auxiliar Gestao dos colaboradores. 
        "
         dataPublic="25 de Abril de 2023." />
                  <Projetos imagem={benditoburguer}
          nomeProjeto="Bendito Burger"
          tags={["#React.js", "#Node.js", "#MongoDB"]}
          texto="Sistema completo de pedidos e gerenciamento de pedidos. 
        "
         dataPublic="25 de Abril de 2023." />


        </div>
      </div>
    </>);
}