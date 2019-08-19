import React from "react";
import { connect } from "react-redux";

const Resultados = props => {
  if (props.datos.datos.data == undefined) {
    return <div />;
  } else {
    return props.datos.datos.data.map(gifs => (
      <div key={gifs.id}>
        {" "}
        <img
          src={gifs.images.downsized.url}
          alt=''
          width='300px'
          height='300px'
        />
      </div>
    ));
  }
};

const mapDispachToProps = state => ({
  datos: state.datos
});

export default connect(mapDispachToProps)(Resultados);
