import React from 'react';
import styles from './WeekForecast.module.css'
import DayForecast from '../DayForecast/DayForecast'
import config from '../config'
import response from './response'

class WeekForecast extends React.Component {
    constructor() {
        super();
        this.state = response;
    }
    render() {
        return (
            <ul className={styles}>
                    <DayForecast /> 
            </ul>
        );
    }
}

export default WeekForecast;
