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
    <div className="ChatApp flex items-center justify-center h-screen">
        <div className="relative h-screen w-1/2" >
            <MainContainer>
                <ChatContainer>
                    <MessageList
                        typingIndicator={isTyping ? <TypingIndicator content='Bossing is typing...' /> : null}
                        style={{backgroundColor: "#74AA9C", fontSize: "20px"}}
                        
                    >
                        {messages.map((message, i) =>{
                            return <Message key={i} model={message} 
                            style={{backgroundColor: "#74AA9C"}}
                            />
                        })}
                    </MessageList>
                    <MessageInput placeholder='Type message here' onSend={handleSend}/>
                </ChatContainer>
            </MainContainer>
        </div>
    </div>
    );
}

export default Chat;