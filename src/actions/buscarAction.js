import types from "./../types/types";

const accionDespacharBusqueda = value => ({
  type: types.BUSQUEDA_GENERADA,
  value
});

export default accionDespacharBusqueda;
