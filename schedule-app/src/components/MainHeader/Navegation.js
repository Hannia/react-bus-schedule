import React, { useContext, Fragment } from "react";

import Unordered from "../UI/Unordered";
import Button from '../UI/Button';
import AuthContext from "../../store/auth-context";
import classes from './Navegation.module.css';

const Navegation = () => {

    const ctx = useContext(AuthContext);

    return <nav>
        <Unordered class={ classes.navlogin }>
        { !ctx.isLoggedIn && <li ><Button classBtn={ `${classes.btn_nav_login}`} onClick={ ctx.onDropdownLogin }>Login</Button></li>}
            { ctx.isLoggedIn && <li ><Button onClick={ctx.onLogout}>Logout</Button></li> }
            <li>Horarios</li>
        </Unordered>
    </nav>
}

export default Navegation;