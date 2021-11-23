const Prueba = (props) => {


    console.log (props.onHandlePrueba);

    const changeData = () => {
        props.onBackResponsive('hola');
    }
    


    return (<div onClick={ changeData }>Prueba</div>);
}

export default Prueba;