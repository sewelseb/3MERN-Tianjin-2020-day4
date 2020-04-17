import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Message extends Component {
  render() {
    {this.props.content}
  }
}

class Chat extends Component {
    render() {
        return (
            <div>
                <Message content={conversation[1]}/>
                <Message content={conversation[2]}/>
            </div>
        );
    }
}

render(
  <Chat conversation={data}/>,
  document.getElementById('root')
);