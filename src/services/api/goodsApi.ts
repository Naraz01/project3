import axios from "axios";

export const GoodsApi = {
    setGoods(payload: any) {
        return axios.post('http://localhost:3001/goods/', payload).then(({data}) => data);
    },
};
