import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: {}
        }
    }

    // Right after page renders
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: '',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:3001/authenticate',
            })
        }) // end of chatManager

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser })
            })
            .catch(error => console.log('error', error))
    }





    render() {
        return (
            <div>
                <h1>Chat</h1>

            </div>
        )
    }
}
