import React from "react";

import classes from "./ForcastWeather.module.css";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ForcastWeather = (props) => {
    const currDay = new Date().getDay();
    const forcastDays = WEEK_DAYS.slice(currDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, currDay));
    return (
        <>
            <label className={classes.title}>Daily</label>
            <Accordion allowZeroExpanded>
                {props.data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={classes.item}>
                                    <img alt="weather" src={`icons/${item.weather[0].icon}.png`} className={classes.smallicon}></img>
                                    <label className={classes.day}>{forcastDays[idx]}</label>
                                    <label className={classes.description}>{item.weather[0].description}</label>
                                    <label className={classes.minmax}>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={classes.dailygrid}>
                                <div className={classes.griditem}>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className={classes.griditem}>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className={classes.griditem}>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className={classes.griditem}>
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className={classes.griditem}>
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>

                                <div className={classes.griditem}>
                                    <label>Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default ForcastWeather;