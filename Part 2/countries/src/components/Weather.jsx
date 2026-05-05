import { useEffect, useState } from "react"
import weatherService from '../services/weather'

const Weather = ({capital}) => {

    const [weatherBlock, setWeatherBlock] = useState(null);
    
    useEffect(() => {
        weatherService
        .getWeather(capital)
        .then(data => setWeatherBlock(
            {
                temp: data.main.temp,
                wind: data.wind.speed,
                img_src: `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
            }
        ))
    }, [capital])

    if (!weatherBlock) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {weatherBlock.temp} Celcius </p>
            <img src={weatherBlock.img_src}></img>
            <p>Wind {weatherBlock.wind} m/s </p>
        </div>
    )
}

export default Weather