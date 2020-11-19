import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import {responses} from './assets/responses';

export default class App extends Component {
	render() {
		return (
			<div id="container">
				<h2>yes or no, you wanna know?</h2>
        <ChatWindow />
        <ChatInput />
			</div>
		);
	}
}
