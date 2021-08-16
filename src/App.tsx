import React, { useContext, useEffect, useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MessagePopup } from './components/MessagePopup';
import { Navbar } from './components/Navbar';
import { MessageContext, MessageContextProps, MessageProps } from './contexts/MessageContext';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Testing } from './pages/Testing';
import './styles/style.css';

const _App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/contact' exact>
                <div className='page-main-container'>
                    <div className='page-main'>
                        <Contact />
                    </div>
                </div>
            </Route>
            <Route path='/testing' exact>
                <div className='page-main-container'>
                    <div className='page-main'>
                        <Testing />
                    </div>
                </div>
            </Route>
        </Router>
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
            <_App />
        </MessageContext.Provider>
    );
};
