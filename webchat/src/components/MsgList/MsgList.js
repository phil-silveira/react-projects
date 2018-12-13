import React from 'react'

import '../MsgItem/MsgItem'
import MsgItem from '../MsgItem/MsgItem';

export default class MsgList extends React.Component {

    render() {
        const { messages } = this.props

        return (
            <div className='msg-list--container'>
                <ul>
                    {messages.map((msg, i) => {
                        return <li key={i}>
                            <MsgItem message={msg} />
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}