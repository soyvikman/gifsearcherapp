import { takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";

function* funcionBusqueda({ value }) {
  const url =
    `https://api.giphy.com/v1/gifs/search?api_key=tWTxmiAnxCDqbFvMn8FKL1IlumFmK6uL&q=` +
    value +
    `&limit=25&offset=0&rating=G&lang=es`;
  yield delay(3000);
  const datos = yield axios.get(url);
  yield put({ type: "BUSQUEDA_GENERADA", value: datos.data });
}

export default function* rootSaga(value) {
  yield takeLatest("BUSQUEDA", funcionBusqueda);
}
