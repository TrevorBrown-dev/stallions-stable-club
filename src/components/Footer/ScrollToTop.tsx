export const ScrollToTop: React.FC = () => {
    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
    };
    return (
        <button className='scroll-to-top' title='Scroll to Top' onClick={() => handleButtonClick()}>
            <span className='material-icons'>keyboard_double_arrow_up</span>
        </button>
    );
};
