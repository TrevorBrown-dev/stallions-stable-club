import { createContext } from "react";
export interface MessageProps {
    title?: string;
    message: string;
}
export interface MessageContextProps {
    message: MessageProps | null;
    setMessage: React.Dispatch<React.SetStateAction<MessageProps | null>>;
}
export const MessageContext = createContext<MessageContextProps| null>(null);