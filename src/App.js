import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import {responses} from './assets/responses';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      conversation: []
    }
    this.processMessage = this.processMessage.bind(this);
  }

  processMessage(question) {
    const addQuestion = [`QUESTION: ${question}` , ...this.state.conversation]

    let randomIndex = Math.floor(Math.random() * responses.length);

    const addResponse = [ `RESPONSE: ${responses[randomIndex]}`, ...addQuestion]

    this.setState({ conversation: addResponse})    
  }

	render() {
		return (
			<div id="container">
				<h2>yes or no, you wanna know?</h2>
        <ChatWindow conversation={this.state.conversation} />
        <ChatInput processMessage={this.processMessage} />
			</div>
		);
	}
}
