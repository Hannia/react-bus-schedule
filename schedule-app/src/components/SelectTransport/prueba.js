const Prueba = (props) => {


    console.log (props.onHandlePrueba);

    const changeData = () => {
        props.onBackResponsive('hola');
    }
    
    const attrPruebas = {
        att1: ''
    }

    return (<div onClick={ changeData } { ...props.value }>Prueba</div>);
}

export default Prueba;