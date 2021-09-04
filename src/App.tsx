import React, { useEffect, useState } from 'react';
import { Calendar } from './components/Calendar';
import { EventsList } from './components/Calendar/EventsList';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/Footer/ScrollToTop';
import { MessagePopup } from './components/MessagePopup';
import { Navbar } from './components/Navbar';
import { MessageContext, MessageProps } from './contexts/MessageContext';
import { Home } from './pages/Home';
import './styles/style.css';

const PrivateApp: React.FC = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Home />
            <Footer />
        </>
    );
};

export const App: React.FC = () => {
    const closingSpeed = 4000;
    const [message, setMessage] = useState<MessageProps | null>(null);
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (message)
            timeout = setTimeout(() => {
                setMessage(null);
            }, closingSpeed);

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [message]);
    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {message && <MessagePopup {...message} closingSpeed={closingSpeed} />}
            <PrivateApp />
        </MessageContext.Provider>
    );
};
