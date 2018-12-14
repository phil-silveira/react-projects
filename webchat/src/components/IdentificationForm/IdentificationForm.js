import React from 'react'

export default class IdentificationForm extends React.Component {
    state = {
        nickname: ''
    }

    handleNickname = e => {
        this.setState({ ...this.state, nickname: e.target.value })
    }

    saveIndentification = () => {
        const { nickname } = this.state

        this.props.onClickNext(nickname)
    }

    render() {
        return <div className='identification-form--container'>
            <form>
                <input
                    value={this.state.nickname}
                    onChange={this.handleNickname}
                    placeholder="what's your nickname?" />

                <button onClick={this.saveIndentification}> Next </button>
            </form>
        </div>
    }
}