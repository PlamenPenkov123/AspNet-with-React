import axios from "axios";
import { fetchAll } from "./person";

const baseUrl = 'https://localhost:7118/api/';

export default {
    person(url = baseUrl + 'People/') {
        return{
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url + id),
            create : newRecord => axios.post(url, newRecord),
            update : (id, updateRecord) => axios.put(url + id, updateRecord),
            delete : id => axios.delete(url + id)
        }
    }
};