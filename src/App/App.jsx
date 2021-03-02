/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './App.module.css';
import WeekForecast from '../WeekForecast/WeekForecast';
import config from '../config';

class App extends React.Component {
    render() {
        const { API, DAYS_TO_SHOW } = config;

        return (
            <div className={styles.App}>
                <h1>Weather App</h1>
                <WeekForecast api={API} daysToShow={DAYS_TO_SHOW} />
            </div>
        );
    }
}

export default App;
