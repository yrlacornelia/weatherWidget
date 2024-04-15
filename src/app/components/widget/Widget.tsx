import { useEffect, useState } from "react";
import styles from "./style.module.css"
import Rain from "../weather/rain/rain";
import Sun from "../weather/sun/sun";
import Snow from "../weather/snow/snow";
import Clouds from "../weather/clouds/clouds";


const Widget = () => {
  const [degrees, setDegrees] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
    async function fetchWeather() {    
       console.log("hello")
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=073eefb84d4536340769641b91ed9ce3&units=metric');
        const data = await response.json();
        console.log(data)
        console.log("hello aknd" + data.weather[0].main)

        console.log("hello aknd" + data.main.temp)

        setDegrees(data.main.temp) 
        setWeather(data.weather[0].description)
        setIcon(data.weather[0].icon)

        
      }
      useEffect(() => {
        fetchWeather()
      }, []);
    return ( 
    <div className={styles.all}>
  <Rain/>
    <Sun/>
    <Snow/>
    <Clouds/>
      <div className={styles.container}>
    
      <div className={styles.textContainer}>
      <h3>HOGWARTS</h3> 
      <h1>{degrees}°</h1>
     <p>{weather.toUpperCase()}</p>
     
     </div> 
 {/* <img src={`https://openweathermap.org/img/wn/${icon}.png `}></img> */}
      </div>
    </div>
  
    
    );
}
 
export default Widget;



// clear sky, few clouds, scattered clouds, broken clouds, shower rain, 
// rain, thunderstorm ,snow,


//mist
// thunder