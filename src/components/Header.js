import WhiteSig from '../app/assets/img/white-sig.png';

const Header = () => {

    return (
        <header>
            <div>
                <img src={WhiteSig} alt="Peter's white signiture" />
            </div>
            <a>SHOP</a>
            <a>COLLABS</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
        </header>
    );
};

export default Header;