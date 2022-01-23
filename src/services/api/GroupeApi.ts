import axios from "axios";

export const GroupeApi = {
    fetchGroupe() {
        return axios.get('http://localhost:3001/groupes?_embed=goods').then(({data}) => data);
    },
    setGroupe(payload: any) {
        return axios.post('http://localhost:3001/groupes/', payload).then(({data}) => data);
    },
};
