import React, { Component } from 'react';

export default class ChatInput extends Component {
	render() {
		return (
			<div id="chat-input">
				<input placeholder='type something...' />
				<button id='chat-submit'>Ask!</button>
			</div>
		);
	}
}
