
const initialState = { 
    episodesFilter: {},
    isEpisodesLoading: false 
}


export default function episodes(state = initialState, action) {
    switch (action.type) {
        case 'GET_EPISODES_DATA':
            return { ...state, episodesData: action.payload, isEpisodesLoading: false };
        case 'SET_EPISODES_FILTER':
            return { ...state, episodesFilter: action.payload };
        case 'EPISODES_LOADING':
            return { ...state, isEpisodesLoading: action.payload };
        default:
            return state
    }
}

