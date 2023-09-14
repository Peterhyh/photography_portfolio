import WhiteSig from '../app/assets/img/white-sig.png';

const Header = () => {

    return (
        <div className='header-container'>
            <div className='header-logo'>
                <a href='/'>
                    <img src={WhiteSig} alt="Peter's white signiture" />
                </a>
            </div>
            <div className='header-buttons-container'>
                <a href='/'>SHOP</a>
                <a href='/'>COLLABS</a>
                <a href='/'>ABOUT</a>
                <a href='/'>CONTACT</a>
            </div>
        </div>
    );
};

export default Header;