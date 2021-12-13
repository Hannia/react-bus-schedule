import Unordered from "../UI/Unordered";


const Menu = (props) => {

    console.log (props);

    return <div className={props.class}>
        <Unordered>
            { props.items.map((item, index) => 
                <li key={`${item}-${index}`}>{item.label}</li>)}
        </Unordered>
    </div>
}

export default Menu;