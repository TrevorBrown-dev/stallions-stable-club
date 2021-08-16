import { HashRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Testing } from './pages/Testing';
import './styles/style.css';


export const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/contact' exact>
                <div className="page-main-container">
                    <div className="page-main">
                        <Contact />
                    </div>
                </div>
            </Route>
            <Route path='/testing' exact>
                <div className="page-main-container">
                    <div className="page-main">
                        <Testing />
                    </div>
                </div>
            </Route>
        </Router>
    );
};
