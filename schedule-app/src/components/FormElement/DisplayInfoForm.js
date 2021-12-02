import { Fragment } from "react";
import Span from "../UI/Span";
import Unordered from '../UI/Unordered';

const DisplayInfoForm = (props) => {
    return (
        <Fragment>
            <Unordered>
            { props.items.map( (item, index) => <li key={`item-place-${item.id}-${index}`}> 
                        <p>{item.departure} - {item.arrive}</p>
                        <p>Horarios</p>
                        <Unordered>
                            {item.schedule.map( (item, index) => 
                                <li key={`item-time-${item.id}-${index}`}>
                                    <Span>Hora Salida: { `${item.departure_hour}: ${item.departure_minute} ${item.departure_time}` }</Span>
                                    <Span> - Hora Llegada: { `${item.arrive_hour}: ${item.arrive_minute} ${item.arrive_time}` }</Span>
                                </li>
                            )}
                        </Unordered>
                        <p>Precio del tiquete: {item.price_ticket}</p>
                        </li>)}
            </Unordered>
        </Fragment>
    ); 
}

export default DisplayInfoForm;