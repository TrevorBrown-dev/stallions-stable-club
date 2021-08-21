import { Link } from 'react-router-dom';
interface NavItemProps {
    to: string;
}
const NavItem: React.FC<NavItemProps> = ({ children, to }) => {
    return (
        <div className='nav-item'>
            <Link to={to}>{children}</Link>
        </div>
    );
};
export const NavbarLinks: React.FC = () => {
    return (
        <nav className='navbar'>
            <NavItem to='/'>Home</NavItem>
            <i className="bullet">&bull;</i>
            <NavItem to='/book'>Book</NavItem>
            <i className="bullet">&bull;</i>

            <NavItem to='/contact'>Contact</NavItem>
        </nav>
    );
};
