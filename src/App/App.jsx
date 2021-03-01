import React from 'react';
import styles from './App.module.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import WeekForecast from '../WeekForecast/WeekForecast'

class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <h1>Weather App</h1>
                <CurrentWeather />
                <WeekForecast />
            </div>
        );
    }
}

export default App;
