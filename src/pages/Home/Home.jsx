import styles from "./Home.module.css"
import React from "react"
import { BsArrowDown } from "react-icons/bs";
import {ThemeContext} from '../../Theme.jsx'
import { SiJavascript, SiReact,SiNodedotjs, SiAmazonaws, SiMongodb, SiPython, SiTypescript } from "react-icons/si";
import Projetos from "../../components/Projetos/Projetos"




export default function Home() {
   const ThemeData = React.useContext(ThemeContext);
  
  return (
    <>
      <div className={styles.container}>
      <h1 className={ThemeData.theme == true ? styles.dark_font : styles.light_font}>Olá! 👋 Meu nome é Lucas </h1>
        <p>um Engenheiro de Software</p>
        <p className={ThemeData.theme == true ? styles.dark_font : styles.light_font}>e desenvolvedor Javascript focado em entregar códigos de qualidade e alta performance.</p>

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
        <p className={ThemeData.theme == true ? styles.dark_font : styles.light_font}>Posts recentes do Blog<BsArrowDown/></p>
        <div className={styles.blogPosts}>
        <Projetos imagem="https://www.notion.so/image/https:%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F360c8017-736f-4057-8a04-d9b5c38a9329%2Fvue-django.webp?table=block&id=985f575f-ff8e-4026-ac18-1d6765924786&cache=v2"
          tags={["#Vue.js", "#JavaScript", "#Ronaldo"]}
          texto="Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui"
         dataPublic="25 de Abril de 2023." />
                  <Projetos imagem="https://www.notion.so/image/https:%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F360c8017-736f-4057-8a04-d9b5c38a9329%2Fvue-django.webp?table=block&id=985f575f-ff8e-4026-ac18-1d6765924786&cache=v2"
          tags={["#Vue.js", "#JavaScript", "#Ronaldo"]}
          texto="Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui"
         dataPublic="25 de Abril de 2023." />
                            <Projetos imagem="https://www.notion.so/image/https:%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F360c8017-736f-4057-8a04-d9b5c38a9329%2Fvue-django.webp?table=block&id=985f575f-ff8e-4026-ac18-1d6765924786&cache=v2"
          tags={["#Vue.js", "#JavaScript", "#Ronaldo"]}
          texto="Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui Texto vai aqui Texto vai aqui 
        Texto vai aqui Texto vai aqui"
         dataPublic="25 de Abril de 2023." />


        </div>
      </div>
    </>);
}