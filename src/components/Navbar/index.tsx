import { Lines } from '../svgs/Lines';
import { NavbarLinks } from './NavbarLinks';

export const Navbar: React.FC = () => {
    return (
        <nav className='nav-container'>
            <Lines />
            <NavbarLinks />
            <Lines />
        </nav>
    );
};
