import { useEffect, useState } from "react";
import styles from "./style.module.css"

const ThunderStorm = () => {
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
          // First blink
          setBlink(true); // Blink white
          setTimeout(() => {
            setBlink(false); // Back to original color
          }, 100);
      
          // Second blink
          setTimeout(() => {
            setBlink(true); // Blink white
          }, 200);
          setTimeout(() => {
            setBlink(false); // Back to original color
          }, 300);
      
          // Third blink
          setTimeout(() => {
            setBlink(true); // Blink white
          }, 800);
          setTimeout(() => {
            setBlink(false); // Back to original color
          }, 1100);
        }, 5000); // Blink every 5 seconds
      
        // Clear the interval when the component unmounts
        return () => clearInterval(blinkInterval);
      }, []);
      
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
  
    return ( <div
        className={styles.container}
        style={{ backgroundColor: blink ? "#D3CACA" : "" }}
      >
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop} />
        </div> );
}
 
export default ThunderStorm;