import React from 'react'

import weatherService from '../../services/WeatherService'

export default class WeatherDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: 'London, uk',
            searchWeather: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.onClickSearchWeather = this.onClickSearchWeather.bind(this)
    }

    componentDidMount() {
        weatherService.getByCityName(this.state.city)
            .then(result => {
                console.log(result.data.weather)


                this.setState({
                    weather: result.data,
                    searchWeather: false
                })
            })

    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })
    }

    onClickSearchWeather(event) {
        const key = event.key

        if (key === 'Enter') {
            this.setState({ searchWeather: true })
        }

    }

    renderSearchBar() {
        return (
            <input
                type="text"
                name='city'
                value={this.state.city}
                placeholder='London, uk'
                onChange={this.handleChange}
                onKeyPress={this.onClickSearchWeather}
            />
        )
    }

    renderWeatherDetails() {
        const weather = this.state.weather.weather[0]

        return (
            <div>
                <p>{weather.main}</p>
                <p>{weather.description}</p>
            </div>
        )
    }

    render() {
        const weather = this.state.weather

        return (
            <div className='weather-details--container'>
                {this.renderSearchBar()}
                {(weather) ? this.renderWeatherDetails() : null}
            </div>
        )
    }
}