import styles from "./CardTags.module.css"


export default function CardTags(props) {
  return(<> 
      <div className={styles.container}>
      {props.tag}
      </div>
    </>)
}