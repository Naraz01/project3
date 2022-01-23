import { 
    FetchGroupeActionTypes,
    SetGroupeActionTypes,
    SetGroupeLoadingStateActionTypes,
    groupeActionsType,
    FetchAddGroupeTypes,
    SetAddGroupeTypes,
    AddGroupeLoadedTypes,
    SetAddGoodsTypes,
    AddGoodsLoadedTypes
    
} from "./contracts/actionTypes"

import {  LoadingState, Goods, GroupeState, Groupe, AddLoadingState } from "./contracts/state"

export const fetchGroupe = (): FetchGroupeActionTypes => ({
    type: groupeActionsType.FETCH_GROUPE
})

export const setGroupe = (
    payload: any
):SetGroupeActionTypes => ({
    type: groupeActionsType.SET_GROUPE,
    payload,
})

export const setGroupeLoadingState = (
    payload: LoadingState
):SetGroupeLoadingStateActionTypes => ({
    type: groupeActionsType.SET_LOADING_STATE,
    payload,
})

export const FetchAddGroupe = (
    payload: any
): FetchAddGroupeTypes => ({
    type: groupeActionsType.FETCH_ADD_GROUPE,
    payload
})

export const setAddGroupe = (
    payload: any
):SetAddGroupeTypes => ({
    type: groupeActionsType.SET_ADD_GROUPE,
    payload,
})

export const setAddGroupeLoadingState = (
    payload: AddLoadingState
):AddGroupeLoadedTypes => ({
    type: groupeActionsType.SET_ADD_LOADING_STATE,
    payload,
})

export const setAddGoods = (
    payload: any
):SetAddGoodsTypes => ({
    type: groupeActionsType.SET_ADD_GOODS,
    payload,
})

export const setAddGoodsLoadingState = (
    payload: AddLoadingState
):AddGroupeLoadedTypes => ({
    type: groupeActionsType.SET_ADD_GOODS_LOADING_STATE,
    payload,
})

export type GroupesActions = 
    | FetchGroupeActionTypes
    | SetGroupeActionTypes
    | SetGroupeLoadingStateActionTypes
    | FetchAddGroupeTypes
    | SetAddGroupeTypes
    | AddGroupeLoadedTypes
    | SetAddGoodsTypes
    | AddGoodsLoadedTypes;