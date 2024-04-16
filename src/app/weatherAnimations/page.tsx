'use client'
import Clouds from "../components/weather/clouds/clouds";
import Mist from "../components/weather/mist/mist";
import Rain from "../components/weather/rain/rain";
import Snow from "../components/weather/snow/snow";
import Sun from "../components/weather/sun/sun";
import ThunderStorm from "../components/weather/thunderstorm/Thunderstorm";

const Weather = () => {
    return ( <div className="allWeathers">
    
         <Rain/>
    <Sun/>
    <Snow/>
    <Clouds/>

    <ThunderStorm />
    <Mist />
    </div> );
}
 
export default Weather;