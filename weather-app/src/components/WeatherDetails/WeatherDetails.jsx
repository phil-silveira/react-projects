import React from 'react'

export default class WeatherDetails extends React.Component {
    state = {}

    componentWillReceiveProps() {
        this.setState({ weather: this.props.weather })
    }

    renderWeatherDetails() {
        const weather = this.props.weather

        if (!weather) {
            return <span />
        }

        return (
            <div>
                asdfasdf
                <p>{weather.name}, {weather.country}</p>
                <p>Nuvens: {weather.clouds}%</p>
                <p>Máxima de {weather.main.temp_max - 273} ºC</p>
                <p>Mínima de {weather.main.temp_min - 273}ºC</p>
            </div>
        )
    }

    render() {
        return (
            <div className='weather-details--container'>
                {this.renderWeatherDetails()}
            </div>
        )
    }
}