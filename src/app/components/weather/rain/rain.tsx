import { useEffect } from "react";
import styles from "./style.module.css"

const Rain = () => {
    const createRandom = () => {

        const raindrop = document.createElement('div');
        raindrop.className = styles.raindrop;
    
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        raindrop.style.left = `${randomLeft}%`;
        raindrop.style.top = `${randomTop}%`;
    
        const container = document.querySelector(`.${styles.container}`);
        if (container) {
          container.appendChild(raindrop);
        } else {
          console.error('Container not found');
        }
      };
  useEffect(() => {
    // Create 50 raindrops when the component mounts
    for (let i = 0; i < 50; i++) {
        setTimeout(createRandom, i * i); // Adjust the timeout delay as needed (100 milliseconds in this example)
      }
    }, []);
  
    return ( <div className={styles.container}>
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop} />
        </div> );
}
 
export default Rain;