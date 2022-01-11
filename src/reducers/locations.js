
const initialState = { locationsLoading: false }


export default function locations(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOCATIONS_LOADING':
            return { ...state, locationsLoading: action.payload };
        case 'GET_LOCATIONS_DATA':
            return { ...state, locationsData: action.payload };
        case 'SET_LOCATIONS_FILTER':
            return { ...state, locationsFilter: action.payload };
        case 'CLEAR_LOCATIONS_FILTER':
            return { ...state, locationsFilter: {}};
        default:
            return state
    }
}