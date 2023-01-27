import React from 'react';
import {Link} from "react-router-dom";
import '../styles/components/Header.scss';

const Header = ({logo, backgroundColor, fontColor, btnOneClassesName= '', btnTwoClassesName = ''}) => {
    return (
        <header className="header" style={{backgroundColor: backgroundColor, color: fontColor}}>
            <div className="header-main">
                <div className="links">
                    <Link className="links-logo" to="/">
                        {logo}
                    </Link>
                    <Link className="links-available" to="/available">Available</Link>
                    <Link className="links-looking-for" to="/looking-for">Looking-for</Link>
                </div>
                <div className="auth">
                    <button className={"auth-registration _btn _btn-black " + btnOneClassesName}>Sign Up</button>
                    <button className={"auth-login _btn _btn-transparent " + btnTwoClassesName}>Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;