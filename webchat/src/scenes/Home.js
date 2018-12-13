import React from 'react'
import { Redirect } from 'react-router'

export default class Home extends React.Component {
    state = {
        goToChatPage: false,
        nickname: ''
    }

    render() {
        if (this.state.goToChatPage)
            return <Redirect to={`/public/${this.state.nickname}`} />

        return <div className='inital-form--container'>
            <input
                value={this.state.nickname}
                onChange={this.handleNickname}
                placeholder="what's your nickname?" />

            <button onClick={this.goToChatPage}> Go Chat </button>
        </div>
    }

    goToChatPage = () => {
        this.setState({ ...this.state, goToChatPage: true })
    }

    handleNickname = e => {
        this.setState({ ...this.state, nickname: e.target.value })
    }
}