import { Link } from 'react-router-dom';
interface NavItemProps {
    to: string;
}
const NavItem: React.FC<NavItemProps> = ({ children, to }) => {
    console.log(to);
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
            <i className='bullet'>&bull;</i>
            <div className='nav-item'>
                <a
                    href='#book-now'
                    onClick={(e) => {
                        e.preventDefault();
                        window.document.getElementById('book-now')?.scrollIntoView();
                    }}
                >
                    Book
                </a>
            </div>
            {/* <NavItem to='#book-now'>Book</NavItem> */}
            <i className='bullet'>&bull;</i>
            <div className='nav-item'>
                <a
                    href='#contact-us'
                    onClick={(e) => {
                        e.preventDefault();
                        window.document.getElementById('contact-us')?.scrollIntoView();
                    }}
                >
                    Contact
                </a>
            </div>

            {/* <NavItem to='/contact'>Contact</NavItem> */}
        </nav>
    );
};
