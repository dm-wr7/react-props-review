import React from 'react';

export default function ChatWindow(props) {
    const conversationMapped = props.conversation.map((element, index) => {
        return <h4 key={index}>{element}</h4>
    });

    return (
        <div id="chat-window">
            {conversationMapped}
        </div>
    );
}
