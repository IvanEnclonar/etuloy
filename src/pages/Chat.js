import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

function Chat() {
    const [isTyping, setIsTyping] = useState(false);

    const [messages, setMessages] = useState([
        {
            message: 'Hello, ako po si Bossing!',
            sender: 'Bossing'
        }
    ]);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing',
        }

        const newMessages = [...messages, newMessage];

        //update messages state
        setMessages(newMessages);

        //set a typing indicator
        setIsTyping(true);
    }

    return (
    <div className="ChatApp flex items-center justify-center h-screen bg-black">
        <div className="relative h-screen w-3/4">
            <MainContainer>
                <ChatContainer>
                    <MessageList
                        typingIndicator={isTyping ? <TypingIndicator content='Bossing is typing...' /> : null}
                        style={{backgroundColor: "#343541", fontSize: "1.7rem"}}
                        
                    >
                        {messages.map((message, i) =>{
                            return <Message key={i} model={message}
                            />
                        })}
                    </MessageList>
                    <MessageInput placeholder='Type message here' onSend={handleSend}
                        style={{fontSize: "1.7rem", backgroundColor: "#343541"}}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    </div>
    );
}

export default Chat;