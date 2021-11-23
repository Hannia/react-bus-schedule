import Unordered from "../UI/Unordered";
import Button from '../UI/Button';

const Navegation = props => {

    return <nav>
        <Unordered>
            { !props.isLogged && <li><a href='/'>Login</a></li> }
            { props.isLogged && <li><Button onClick={props.onLogout}>Logout</Button></li> }
        </Unordered>
    </nav>
}

export default Navegation;