import axios from 'axios'


export const getAllEpisodes = (opts) => dispatch => {
        let params  = ''
        console.log(opts)
        Object.keys(opts).forEach(key=>{
        if(opts[key]){ params = params + (params?"&":'') + key+"="+opts[key]}
        })
        let URL = `https://rickandmortyapi.com/api/episode` + '?' + params
        axios.get(URL)
        .then(response => response.data)
        .then(data=>{
            console.log(data)
            dispatch({
                type: 'GET_EPISODES_DATA',
                payload: data
            });
        })
};


export const applyEpisodesFilter = (data) => dispatch => {
    dispatch({ type: 'SET_EPISODES_FILTER', payload: data});
};
