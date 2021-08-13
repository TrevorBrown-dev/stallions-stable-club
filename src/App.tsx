import { HashRouter as Router, Route } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
export const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </Router>
  );
}

