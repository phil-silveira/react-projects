import React from 'react'

export default class MsgInput extends React.Component {
    constructor() {
        super()
        this.state = {
            message: {
                author: '',
                content: '',
                date: ''
            }
        }
    }

    handleMessage = e => {
        const content = e.target.value
        let { message } = this.state

        message.content = content

        this.setState({ message })
    }

    onClickSend = () => {
        let { message } = this.state
        message.date = new Date()

        this.setState({ message })

        this.props.onClickSend(this.state.message)
    }

    render() {
        return (
            <div className='msg-input--container'>
                <div>
                    <input
                        className='msg-text--input'
                        value={this.state.message.content}
                        onChange={this.handleMessage}
                        placeholder='leave your message ...' />
                    <button
                        className='msg-send--button'
                        onClick={this.onClickSend}
                    >Send</button>
                </div>
            </div>
        )
    }
}