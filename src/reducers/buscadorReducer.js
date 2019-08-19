const initialState = {
  datos: []
};

const buscadorReducer = (state = initialState, action) => {
  const nuevoEstado = { ...state };
  switch (action.type) {
    case "BUSQUEDA_GENERADA":
      nuevoEstado.datos = action.value;
      break;
    default:
      return nuevoEstado;
  }
  return nuevoEstado;
};

export default buscadorReducer;
