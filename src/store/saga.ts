import { all } from 'redux-saga/effects';
import { groupeSaga } from './ducks/groupe/sagas';

export default function* rootSaga() {
    yield all([groupeSaga()]);
}