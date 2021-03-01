import React from 'react';
import styles from './WeekForecast.module.css'
import DayForecast from '../DayForecast/DayForecast'

class WeekForecast extends React.Component {
    render() {
        return (
            <div className={styles}>
                {/* 7 times */}
                <DayForecast /> 
            </div>
        );
    }
}

export default WeekForecast;
