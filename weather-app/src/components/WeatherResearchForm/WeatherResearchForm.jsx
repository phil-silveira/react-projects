import React from 'react'

import { Icon, Input, Button } from 'react-materialize'

export default class WeatherResearchForm extends React.Component {
    constructor() {
        super()
        this.state = {
            location: ''
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='weather-research--form'>
                <Input
                    name='location'
                    value={this.state.location}
                    onChange={this.handleChange}
                    placeholder='pesquise algo como "London, uk"' />
                <Button
                    onClick={() => this.props.onResearchWeather(this.state.location)}
                >Pesquisar<Icon right>cloud</Icon></Button>
            </div>
        )
    }
}