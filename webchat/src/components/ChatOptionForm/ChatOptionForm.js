import React from 'react'

const CHAT_OPTIONS = { PUBLIC: 'PUBLIC', GROUP: 'GROUP', CREATE_GROUP: 'CREATE_GROUP' }

export default class ChatOptionForm extends React.Component {
    state = {
        chatOption: CHAT_OPTIONS.PUBLIC,
        groupCode: '',
        groupName: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }

    goToChatPage = () => {
        console.log(this.state)
    }

    render() {
        const { chatOption } = this.state

        return <div className='chat-option-form--container'>
            <div onChange={this.handleChatOption} >
                <h3>Choose Your Chat</h3>
                <div>
                    <label onClick>
                        <input type='radio' name='chatOption' value={CHAT_OPTIONS.PUBLIC} onClick={this.handleChange} /> Public
                    </label>
                </div>
                <div>
                    <label>
                        <input type='radio' name='chatOption' value={CHAT_OPTIONS.GROUP} onClick={this.handleChange} /> Group
                    </label>
                    {(chatOption === CHAT_OPTIONS.GROUP) ?
                        <div>
                            <label><input name='groupName' placeholder="what's the code for group?" onChange={this.handleChange} /></label>
                        </div>
                        : null}
                </div>
                <div>
                    <label>
                        <input type='radio' name='chatOption' value={CHAT_OPTIONS.CREATE_GROUP} onClick={this.handleChange} /> New Group
                    </label>
                    {(chatOption === CHAT_OPTIONS.CREATE_GROUP) ?
                        <div className='new-group-info--container' >
                            <label><input name='groupName' placeholder="Choose a name for group?" onChange={this.handleChange} /></label>
                            <label><input name='groupCode' placeholder="Type a code for group?" onChange={this.handleChange} /></label>
                        </div>
                        : null}
                </div>

                <button onClick={this.goToChatPage}> Go Chat </button>
            </div>
        </div>
    }
}