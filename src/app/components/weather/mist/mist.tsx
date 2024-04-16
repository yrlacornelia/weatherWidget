import styles from "./style.module.css"
const Mist = () => {
    return ( 
//    <div className={`${styles.cloud} ${styles.c2}`}></div>
        <div
        className={styles.container}
      >
        <div id={styles.foglayer_01} className={styles.fog}>
  <div className={styles.image01}></div>
  <div className={styles.image02}></div>
</div>
<div  id={styles.foglayer_02} className={styles.fog}>
  <div className={styles.image01}></div>
  <div className={styles.image02}></div>
</div>
<div  id={styles.foglayer_03} className={styles.fog}>
  <div className={styles.image01}></div>
  <div className={styles.image02}></div>
</div>
        </div>
     );
}
 
export default Mist;