import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, _setMessage] = useState("");

    const setMessage = (msg) => {
        _setMessage(msg);
    };
    useEffect(() => {
        setTimeout(() => {
            _setMessage('');
        }, 9000);
    },[message])
    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {children}
        </MessageContext.Provider>
    );
};
export const useMessage = () => {
    return useContext(MessageContext);
};
