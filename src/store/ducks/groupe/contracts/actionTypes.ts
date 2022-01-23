import { Action } from "redux"; 
import { LoadingState, GroupeState, AddLoadingState, AddGoodsLoadingState } from "./../contracts/state";

export enum groupeActionsType {
    FETCH_GROUPE = 'groupe/FETCH_GROUPE',
    SET_GROUPE = 'groupe/SET_GROUPE',
    SET_LOADING_STATE = 'groupe/SET_LOADING_STATE',
    FETCH_ADD_GROUPE = 'groupe/FETCH_ADD_GROUPE',
    SET_ADD_GROUPE = 'groupe/SET_ADD_GROUPE',
    SET_ADD_LOADING_STATE = 'groupe/SET_ADD_LOADING_STATE',
    SET_ADD_GOODS = 'groupe/SET_ADD_GOODS',
    SET_ADD_GOODS_LOADING_STATE = 'groupe/SET_ADD_LOADING_STATE',
}

export interface FetchGroupeActionTypes extends Action<groupeActionsType> {
    type: groupeActionsType.FETCH_GROUPE;
}

export interface SetGroupeActionTypes extends Action<groupeActionsType> {
    type: groupeActionsType.SET_GROUPE;
    payload: GroupeState;
}

export interface SetGroupeLoadingStateActionTypes extends Action<groupeActionsType> {
    type: groupeActionsType.SET_LOADING_STATE;
    payload: LoadingState
}

export interface FetchAddGroupeTypes extends Action<groupeActionsType> {
    type: groupeActionsType.FETCH_ADD_GROUPE;
    payload: any;
}

export interface SetAddGroupeTypes extends Action<groupeActionsType> {
    type: groupeActionsType.SET_ADD_GROUPE;
    payload: any;
}

export interface AddGroupeLoadedTypes extends Action<groupeActionsType> {
    type: groupeActionsType.SET_ADD_LOADING_STATE;
    payload: AddLoadingState
}

export interface SetAddGoodsTypes extends Action<groupeActionsType> {
    type: groupeActionsType.SET_ADD_GOODS;
    payload: any;
}

export interface AddGoodsLoadedTypes extends Action<groupeActionsType> {
    type: groupeActionsType.SET_ADD_GOODS_LOADING_STATE;
    payload: AddGoodsLoadingState
}