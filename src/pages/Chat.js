import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."

const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

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
        await processMessageToChatGPT(newMessages);
    }

    async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message }
        });


        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,  // The system message DEFINES the logic of our chatGPT
                ...apiMessages // The messages from our chat with ChatGPT
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]);
                setIsTyping(false);
            });
    }

    return (
        <div className="ChatApp flex items-center justify-center h-screen bg-black">
            <div className="relative h-screen w-3/4">
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            typingIndicator={isTyping ? <TypingIndicator content='Bossing is typing...' /> : null}
                            style={{ backgroundColor: "#343541", fontSize: "20px" }}

                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message}
                                />
                            })}
                        </MessageList>
                        <MessageInput placeholder='Type message here' onSend={handleSend}
                            style={{ fontSize: "20px", backgroundColor: "#343541" }}
                        />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
}

export default Chat;