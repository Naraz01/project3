export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export enum AddLoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export enum AddGoodsLoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export interface Goods {
    id: string,
    name: string,
    vendorCode: string,
    eanCode: string,
    pricePurchases: string,
    salePrice: string,
    goodsType: any,
}
export interface Groupe {
    id: string,
    name: string,
    goods?: Goods[]
}
export interface GroupeState {
    data?: Groupe[] | any;
    loadingState: LoadingState;
    addLoadingState: AddLoadingState;
    addGoodsLoadingState: AddGoodsLoadingState
}