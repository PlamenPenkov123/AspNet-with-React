import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
};

export const fetchAll = () => dispatch => {
    api.person().fetchAll()
        .then(respone => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: respone.data
            })
        })
        .catch(err => console.log(err))

};