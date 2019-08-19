import React from "react";
import "./Buscador.css";
import { connect } from "react-redux";
import Resultados from "./Resultados";

const Buscador = props => {
  return (
    <div>
      <div className='central-busqueda'>
        <h1>Ingrese el nombre de los gifs que desea buscar:</h1>
        <br />
        <input type='text' onChange={props.despacharAccion} />
        <br />
      </div>
      <div className='flexboxing-results'>
        <Resultados />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  datos: state.datos
});

const mapDispachToProps = dispach => ({
  despacharAccion: e => dispach({ type: "BUSQUEDA", value: e.target.value })
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Buscador);
