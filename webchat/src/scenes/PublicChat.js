import React from 'react'
import io from 'socket.io-client'

import MsgInput from '../components/MsgInput/MsgInput';
import MsgList from '../components/MsgList/MsgList';

const socket = io('http://localhost:3001')

export default class PublicChat extends React.Component {
    constructor(props) {
        super(props)
        const { nickname } = props.match.params
        this.state = {
            username: (nickname) ? nickname : 'Anonymous',
            messages: []
        }

        socket.on('update_message_list', (msg) => {
            msg.date = new Date(msg.date)

            this.updateMessageList(msg)
        })
    }

    render() {
        return (
            <div className='webchat--container'>
                <MsgList messages={this.state.messages} />
                <MsgInput onClickSend={this.createNewMessage} />
            </div>
        )
    }

    createNewMessage = (newMessage) => {
        newMessage.author = this.state.username
        console.log(newMessage)
        socket.emit('new_message', newMessage)

        newMessage.author = 'You'
        this.setState({ messages: [...this.state.messages, { ...newMessage }] })
    }

    updateMessageList = (newMessage) => {
        this.setState({ messages: [...this.state.messages, { ...newMessage }] })
    }
}