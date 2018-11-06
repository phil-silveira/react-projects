import React from 'react'

import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import WeatherResearchForm from '../components/WeatherResearchForm/WeatherResearchForm'

import WeatherService from '../services/WeatherService'

import { Card, CardTitle } from 'react-materialize'
import './WeatherScene.css'

export default class WeatherScene extends React.Component {
    state = {}

    researchWeather = (location) => {
        console.log('pesquisando tempo')

        const research = async () => {
            const { data } = await WeatherService.getByCityName(location)

            const { name, sys: { country }, main, clouds: { all } } = data
            this.setState({ weather: { name, clouds: all, country, main } })
            console.log(this.state.weather)
        }

        research()
    }

    render() {
        return (
            <div className='weather-scene--container'>
                <Card className='small weather-card'>
                    <WeatherResearchForm
                        onResearchWeather={this.researchWeather} />
                    <WeatherDetails weather={this.state.weather} />
                </Card>
            </div>
        )
    }
}