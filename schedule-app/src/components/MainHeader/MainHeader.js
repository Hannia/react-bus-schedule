import Navegation from "./Navegation";

const MainHeader = props => {
    return (
        <header>
            <h1>Viaje por Costa Rica</h1>
            <Navegation isLogged={ props.isAuthenticated } onLogout={props.onLogout}/>
        </header>
    );
}

export default MainHeader;