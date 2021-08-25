import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/Footer/ScrollToTop';
import { MessagePopup } from './components/MessagePopup';
import { Navbar } from './components/Navbar';
import { MessageContext, MessageContextProps, MessageProps } from './contexts/MessageContext';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Testing } from './pages/Testing';
import './styles/style.css';

const _App: React.FC = () => {
    useEffect(() => {
        window.document.title = 'The Stable Club at Cantine Field';
    }, []);
    return (
        <Router>
            <Navbar />
            <ScrollToTop />
            <Route path='/' exact>
                <Home />
            </Route>
            {/* <Route path='/testing' exact>
                <div className='page-main-container'>
                    <div className='page-main'>
                        <Testing />
                    </div>
                </div>
            </Route> */}
            <Footer />
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
