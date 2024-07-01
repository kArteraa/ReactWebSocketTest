import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const WebSocket = ({id}) => {
    const [socketUrl, setSocketUrl] = useState(`ws://localhost:8000/chat/ws/json/${id}`);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const [text,setText] = useState("");

    const [messageHistory, setMessageHistory] = useState([]);

    useEffect(() => {
        console.log(lastMessage);
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage));
        }
    },[lastMessage]);   


    return (
        <div className="container">
            <div className="history">
                <div className="history__ui">
                    <input
                        type="text"
                        placeholder="Написать..."
                        className="history__input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        className="history__btn"
                        onClick={() => sendMessage(JSON.stringify({id:id,message:text}))}
                    >
                        Отправить
                    </button>
                </div>
                {/* <div className="history__list">
                    <h1 className="history__list__title">Сообщения</h1>
                    {messageHistory.map((message, idx) => {
                        const currentDate = new Date().toLocaleString();

                        return (
                            <h1 className="history__item" key={idx}>
                                <span className="history__item__message">{message.data}</span>
                            </h1>
                        );
                    })}
                </div> */}
            </div>
        </div>
    );
};

export default WebSocket;
