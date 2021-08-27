interface NavItemProps {
    to: string;
}
//This file looks a little weird because It's set up to use react router in the future
const NavItem: React.FC<NavItemProps> = ({ children, to }) => {
    return (
        <div className='nav-item'>
            <a href={to}>{children}</a>
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
