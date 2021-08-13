import { HashRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import './styles/style.css';
export const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/contact' exact>
                <Contact />
            </Route>
        </Router>
    );
};
