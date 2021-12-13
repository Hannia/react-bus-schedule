import { Fragment, useState } from "react";
import Menu from "../MenuMain/Menu";
import Span from "../UI/Span";
import Unordered from '../UI/Unordered';
import classes from './Schedule.module.css';
import SelectTransport from '../SelectTransport/SelectTransport';


const DisplayInfoForm = (props) => {

    const [isShowSchedule, setIsShowSchedule] = useState(classes.inactive);

    const typeOfTranp = [
                        { label: 'Buses'},
                        { label: 'Tren'}
                    ];

    const showSchedule = (event) => {
        const nextElementSibling = event.target.parentNode.nextElementSibling;
        if (nextElementSibling.classList.contains(classes.inactive)) {
            nextElementSibling.classList.remove(classes.inactive);
            nextElementSibling.classList.add(classes.active);
            return;
        }
        nextElementSibling.classList.add(classes.inactive);
    }

    return (
        <Fragment>
        <div class= {`${classes.center} ${classes.mar_top_bottom}`}>
            <Menu class={`${classes.style_list} ${classes.mar_top_bottom}`} items={ typeOfTranp } />
            <SelectTransport />
        </div>

        <div className={`${classes.center_schedule} ${classes.style_list}`}> 
            <Unordered class={classes.list_items}>
            { props.items.map( (item, index) => <li key={`item-place-${item.id}-${index}`}>
                        <div className={classes.item}>
                            <p className={classes.title_route}>{item.departure} - {item.arrive} </p><i onClick={ showSchedule } className={classes.icon_right}></i>
                        </div>
                        <div className={`${classes.inactive} ${classes.schedule_items}`} data-item= {`item-${index}`}>
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
                        </div>
                        </li>)}
            </Unordered>
        </div>
        </Fragment>
    ); 
}

export default DisplayInfoForm;