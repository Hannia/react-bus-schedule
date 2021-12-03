import React, { useContext } from "react";

import Unordered from "../UI/Unordered";
import Button from '../UI/Button';
import AuthContext from "../../store/auth-context";

const Navegation = () => {

    const ctx = useContext(AuthContext);

    return <nav>
        <Unordered>
            { !ctx.isLoggedIn && <li><a href='/'>Login</a></li> }
            { ctx.isLoggedIn && <li><Button onClick={ctx.onLogout}>Logout</Button></li> }
        </Unordered>
    </nav>
}

export default Navegation;