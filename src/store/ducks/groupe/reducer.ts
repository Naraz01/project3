import { GroupesActions } from "./actionCreators";
import { groupeActionsType } from "./contracts/actionTypes";
import { LoadingState, GroupeState, AddLoadingState, AddGoodsLoadingState } from "./contracts/state";

const initialGroupeState: GroupeState = {
    data: [],
    loadingState: LoadingState.NEVER,
    addLoadingState: AddLoadingState.NEVER,
    addGoodsLoadingState: AddGoodsLoadingState.NEVER
};

export const groupeReducer = (state = initialGroupeState, action: GroupesActions) => {
    switch (action.type) {
        case (groupeActionsType.FETCH_GROUPE) : {
            return { ...state, data: [], loadingState: LoadingState.LOADING };
        }
        case (groupeActionsType.SET_GROUPE) : {
            return { ...state, data: action.payload, loadingState: LoadingState.LOADED };
         }
        
        case (groupeActionsType.SET_LOADING_STATE) : {
            return { ...state,  loadingState: action.payload };
        }

        case groupeActionsType.SET_ADD_GROUPE: {
            /*console.log(action.payload)
            let newData = {...state};
            newData.data = [...state.data, action.payload]
            newData.data.goods = [] */
            return {
                ...state, data: [...state.data, action.payload], addLoadingState: AddLoadingState.LOADED
            }
        }

        case (groupeActionsType.SET_ADD_LOADING_STATE) : {
            return { ...state,  addLoadingState: action.payload };
        }

        case groupeActionsType.SET_ADD_GOODS: {
            let copyState = {...state};

            let goods = copyState.data.map((item:any) => {
                if (item.id === action.payload.groupeId) {
                    item.goods.push(action.payload)
                }
                return item
            });

            
            console.log('goods', goods)
            return state;
/*
            return {
                ...state, data: [...state.data, action.payload], addLoadingState: AddLoadingState.LOADED
            }
            */
        }

        case (groupeActionsType.SET_ADD_GOODS_LOADING_STATE) : {
            return { ...state,  addLoadingState: action.payload };
        }

        default : {
            return state
        }
    }
};