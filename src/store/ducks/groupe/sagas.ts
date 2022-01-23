import { call, takeLatest, put } from "@redux-saga/core/effects";
import { setAddGroupe, setAddGroupeLoadingState, setGroupe, setGroupeLoadingState } from "./actionCreators";
import { AddLoadingState, LoadingState } from "./contracts/state";
import { groupeActionsType } from "./contracts/actionTypes";
import { GroupeApi } from "../../../services/api/GroupeApi";

export function* fetchGroupeRequest():any {
    try {
        const items = yield call(GroupeApi.fetchGroupe);
        yield put(setGroupe(items));
    }
    catch (error) {
        yield put(setGroupeLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddGroupeRequest(payload:any):any {
    try {
       yield put(setAddGroupe(payload.payload));
    }
    catch (error) {
        yield put(setAddGroupeLoadingState(AddLoadingState.ERROR))
    }
}

export function* groupeSaga() {
    yield takeLatest(groupeActionsType.FETCH_GROUPE, fetchGroupeRequest);
    yield takeLatest(groupeActionsType.FETCH_ADD_GROUPE, fetchAddGroupeRequest);
}

