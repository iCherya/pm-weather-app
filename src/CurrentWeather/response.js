// 20210301133837
// https://api.weatherbit.io/v2.0/current?city=Kyiv,UA&key=01184eace09548a0bcb4408b167ea145
const response = {
    data: [
        {
            rh: 89,
            pod: 'd',
            lon: 30.5238,
            pres: 1010.2,
            timezone: 'Europe/Kiev',
            ob_time: '2021-03-01 11:14',
            country_code: 'UA',
            clouds: 100,
            ts: 1614597240,
            solar_rad: 91.8,
            state_code: '12',
            city_name: 'Kiev',
            wind_spd: 0.89,
            wind_cdir_full: 'north-northeast',
            wind_cdir: 'NNE',
            slp: 1029.5,
            vis: 5,
            h_angle: 15,
            sunset: '15:39',
            dni: 808.02,
            dewpt: 1.2,
            snow: 0,
            uv: 1.69653,
            precip: 0,
            wind_dir: 29,
            sunrise: '04:39',
            ghi: 510.25,
            dhi: 97.27,
            aqi: 19,
            lat: 50.45466,
            weather: {
                icon: 'c04d',
                code: 804,
                description: 'Overcast clouds'
            },
            datetime: '2021-03-01:11',
            temp: 2.8,
            station: 'E0036',
            elev_angle: 31.27,
            app_temp: 2.5
        }
    ],
    count: 1
};

export default response;
