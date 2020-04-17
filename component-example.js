import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// let data = {
//   total: 50,
//   item: 20
// };

// var style =  {
//   color: 'lightblue',
//   padding: '10px'
// }

class Message extends Component {
  render() {
    /*console.log(this.props);
    return (
      <secttion>
        <p>total: {this.props.total}</p>
        <item>item: {this.props.item}</item>
      </secttion>
    );*/
  }
}

render(
  <Message/>,
//   <Message total={data.total} item={data.item}/>,
  document.getElementById('root')
);