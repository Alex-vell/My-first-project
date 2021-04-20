import React from 'react';
import s from './Header.module.css';
import NavLink from "react-router-dom/NavLink";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskF1ENMQmiosFwUfUir1_F_A9iymAa2w62A&usqp=CAU'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;