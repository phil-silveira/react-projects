import React from 'react'

export default class MsgItem extends React.Component {
    render() {
        const { author, content, date } = this.props.message

        return (
            <div className='msg-item--container'>
                <div className='msg-author'>{author}</div>
                <div className='msg-content'>{content}</div>
                <div className='msg-date'>{date.toLocaleTimeString()}</div>
            </div>
        )
    }
}