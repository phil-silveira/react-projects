import React from 'react'
import { Redirect } from 'react-router'

import IdentificationForm from '../components/IdentificationForm/IdentificationForm'
import ChatOptionForm from '../components/ChatOptionForm/ChatOptionForm'

export default class Home extends React.Component {
    state = {
        nickname: '',
        groupName: '',
        groupCode: '',
        goToChatPublic: false,
        goToChatGroup: false,
        step: 1
    }

    render() {
        if (this.state.goToChatPublic)
            return <Redirect to={`/public/${this.state.nickname}`} />
        if (this.state.goToChatGroup)
            return <Redirect to={`/group/${this.state.nickname}`} />

        switch (this.state.step) {
            case 1:
                return <IdentificationForm onClickNext={this.saveIndentification} />
            case 2:
                return <ChatOptionForm onClickGoChat={this.goToChoosedChat} />
            default:
                return <span />
        }
    }

    saveIndentification = (nickname) => {
        this.setState({ ...this.state, nickname, step: 2 })
    }

    goToChoosedChat = (choice) => {
        const { option, groupName, groupCode } = choice

        if (option === 'GROUP') {
            this.setState({ ...this.state, goToChatGroup: true, groupCode })
        } else if (option === 'CREATE_GROUP') {
            this.setState({ ...this.state, goToChatGroup: true, groupName })
        } else {
            this.setState({ ...this.state, goToChatPublic: true })
        }
    }
}