import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var messages = [
    "hello",
    "hello",
    "how are you?",
    "good, thanks"
]

class Message extends Component {
  render() {
    {this.props.content}
  }
}

class Chat extends Component {
    render() {
        return (
            <div>
                {this.props.conversation.map(
                    message => <Message content={message} />
                )}
            </div>
        );
    }
}

render(
  <Chat conversation={messages}/>,
  document.getElementById('root')
);