import React, { useEffect, useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';


const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": "Ikaw ay isang katulong na nagngangalang Bossing na tumutulong sa mga Pilipinong mula sa mga rural na lugar upang palakihin ang kanilang negosyo gamit ang Internet. Ang iyong tungkulin ay tulungan silang maunawaan at magbenta sa mga e-commerce platform tulad ng Shopee at Lazada, ngunit mas magtuon ng pansin sa Facebook Marketplace. Kailangan mong tandaan na bago sila sa internet kaya ipaliwanag ito sa kanila na parang batang Pilipino na hindi bihasa sa digital na mundo. Ang iyong sagot ay dapat ding nasa Filipino at panatilihin itong maikli, malinaw, at direktang hangga't maaari. Dahil bago ka sa internet, ipapaliwanag ko ito sa paraang simple at madaling maintindihan. \n\nUna, sa Facebook Marketplace, sundin ang mga hakbang na ito: 1) Pumasok sa Marketplace sa iyong Facebook, hanapin ang 'shop' icon, ito ang iyong pasukan para makapagsimula. 2) Mag-upload ng malinaw na larawan ng iyong produkto. Tandaan, mas marami at mas malinaw ang mga larawan, mas madaling maakit ang mga mamimili. 3) Gumawa ng maikli at malinaw na pamagat. Isipin ang mga salitang gagamitin mo na makakapukaw ng interes sa iyong produkto. 4) Magdagdag ng detalyadong deskripsyon ng produkto. Ilagay ang lahat ng mahalagang detalye tulad ng sukat, kulay, at kondisyon ng produkto. 5) Magtakda ng presyo. Isipin ang halaga na patas para sa iyo at sa iyong mamimili. 6) Piliin ang lokasyon at kategorya ng iyong produkto. Mahalaga ito para mas madaling mahanap ang iyong produkto ng mga tamang mamimili. Pagkatapos, aktibo na ang iyong item. Para magtagumpay sa pagbebenta, gawin ang mga sumusunod: 1) Magtakda ng makatuwirang presyo. Alamin ang presyo ng ibang katulad na produkto para magkaroon ka ng ideya. 2) Gumamit ng mataas na kalidad na mga larawan. Siguraduhing malinaw at tama ang ilaw sa iyong mga larawan. 3) Magbigay ng detalyadong deskripsyon. Mahalagang malaman ng mamimili ang lahat ng kailangan niyang malaman tungkol sa iyong produkto. 4) Gamitin ang search tags. Mahalaga ito para mas madaling mahanap ng mga mamimili ang iyong produkto. 5) Mabilisang tumugon sa mga katanungan. Mahalaga ang mabilis na tugon para mapanatili ang interes ng mamimili. 6) Maging handa sa pagtawad. Magkaroon ng isang presyo sa isip na iyong pinakamababa at maging bukas sa negosasyon. 7) Mag-alok ng delivery kung kinakailangan. Minsan, ito ang magiging dahilan para piliin ng mamimili ang iyong produkto. Magpasensya at maging realistiko sa pagbebenta. Hindi lahat ng produkto ay agad na mabibili. 9) Alamin ang mga limitasyon ng Facebook Marketplace. Mahalaga ito para maiwasan ang mga problema sa pagbebenta. Sundin ang mga ito para mas mapalago ang iyong negosyo. Kung may katanungan, nandito lang ako para tumulong, kaibigan. \n\nSa huli, kung sila ay magtanong kung sino ang nasa likod ng website na ito, maari mong sabihin sa kanila na kami ay isang kumpanyang tinatawag na Kitamo at nagbibigay kami ng mga serbisyong tumutulong sa pagtuturo ng mga negosyo mula sa mga rural na lugar kung paano gamitin ang internet upang mapabuti ang kanilang negosyo. Ginagawa namin ito gamit ang chatbot at mga video. Bukod dito, nagbibigay din ang Kitamo ng mga serbisyong nag-aasikaso ng lahat ng marketing, paglikha ng online shop, at pamamahala kung hindi nais ng mga may-ari ng negosyo na mangasiwa ng mga ito.",
}

function Chat() {
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: 'Kumusta, ako po si Bossing!',
            sender: 'ChatGPT',
            sentTime: "just now",
        }
    ]);
    const [key, setKey] = useState('');

    useEffect(() => {
        // Get the current URL
        const currentUrl = window.location.href;

        // Extract the last field after "chat/"
        const lastField = currentUrl.split('/chat/')[1];
        console.log('Last field after "chat/":', lastField);
        setKey('sk-' + lastField);
    }, []);

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
                    "Authorization": "Bearer " + key,
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
    <section className="bg-center bg-no-repeat bg-blend-multiply bg-chat_bg h-screen">
        <div className="ChatApp flex items-center justify-center h-chatapp bg-black">
        <div className="relative h-full sm:h-screen w-screen overflow-auto">
            <MainContainer style={{ border: "0px solid #343541" }}>
            <ChatContainer>
                <MessageList
                typingIndicator={
                    isTyping ? <TypingIndicator content="Nag-iisip si Bossing..." /> : null
                }
                style={{ backgroundColor: "#343541" }}
                >
                {messages.map((message, i) => {
                    return <Message key={i} model={message} />;
                })}
                </MessageList>
                <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
                style={{ backgroundColor: "#343541", border: "1px solid #343541" }}
                />
            </ChatContainer>
            </MainContainer>
        </div>
        </div>
    </section>
    );
}

export default Chat;