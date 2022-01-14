import axios from 'axios'

export const getAllLocations = (opts) => dispatch => {
        let params  = ''
        console.log(opts)
        dispatch({ type: 'LOCATIONS_LOADING', payload: true });
        Object.keys(opts).forEach(key=>{
        if(opts[key]){ params = params + (params?"&":'') + key+"="+opts[key]}
        })
        let URL = `https://rickandmortyapi.com/api/location` + '?' + params
        axios.get(URL)
        .then(response => response.data)
        .then(data=>{
            console.log(data)
            dispatch({
                type: 'GET_LOCATIONS_DATA',
                payload: data
            });
        })
        .catch(err=>{
            console.log('err', err)
            dispatch({ type: 'GET_LOCATIONS_DATA', payload: null });
        })
};


export const applyLocationsFilter = (data) => dispatch => {
    dispatch({ type: 'SET_LOCATIONS_FILTER', payload: data});
    dispatch(getAllLocations(data))
};
