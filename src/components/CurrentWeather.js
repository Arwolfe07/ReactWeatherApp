import React from "react";

import classes from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
    return <div className={classes.weather}>
        <div className={classes.top}>
            <div>
                <p className={classes.city}>{props.data.city}</p>
                <p className={classes.description}>{props.data.weather[0].description}</p>
            </div>
            <img src={`icons/${props.data.weather[0].icon}.png`} alt="Icon" className={classes.icon} />
        </div>
        <div className={classes.bottom}>
            <p className={classes.temperature}>{Math.round(props.data.main.temp)}°C</p>
            <div className={classes.details}>
                <div className={classes.row}>
                    <span className={classes.label}>Feels Like</span>
                    <span className={classes.value}>{Math.round(props.data.main.feels_like)}°C</span>
                </div>
                <div className={classes.row}>
                    <span className={classes.label}>Wind</span>
                    <span className={classes.value}>{props.data.wind.speed} m/s</span>
                </div>
                <div className={classes.row}>
                    <span className={classes.label}>Humidity</span>
                    <span className={classes.value}>{props.data.main.humidity}%</span>
                </div>
                <div className={classes.row}>
                    <span className={classes.label}>Pressure</span>
                    <span className={classes.value}>{props.data.main.pressure} hPa</span>
                </div>

            </div>
        </div>

    </div>
};

export default CurrentWeather;