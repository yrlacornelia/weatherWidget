
import styles from "./style.module.css"

const Clouds  = () => {
    return ( <>
     <div className={styles.container}>
        <div className={styles.theSun}>
		<div className="ray_box">
			<div className="ray ray1"></div>
			<div className="ray ray2"></div>
			<div className="ray ray3"></div>
			<div className="ray ray4"></div>
			<div className="ray ray5"></div>
			<div className="ray ray6"></div>
			<div className="ray ray7"></div>
			<div className="ray ray8"></div>
			<div className="ray ray9"></div>
			<div className="ray ray10"></div>
		</div>
		</div>
        <div className={styles.cloudwrapperTwo}>
    <div className={`${styles.cloud} ${styles.c2}`}></div>
</div>
<div className={styles.cloudwrapperThree}>
    <div className={`${styles.cloud} ${styles.c3}`}></div>
</div>
    </div> 
  

    </> );
}
 
export default Clouds ;