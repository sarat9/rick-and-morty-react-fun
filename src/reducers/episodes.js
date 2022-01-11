
const initialState = { 
    episodesFilter: {},
    isLoading: false 
}


export default function episodes(state = initialState, action) {
    switch (action.type) {
        case 'GET_EPISODES_DATA':
            return { ...state, episodesData: action.payload };
        case 'SET_EPISODES_FILTER':
            return { ...state, episodesFilter: action.payload };
        default:
            return state
    }
}

