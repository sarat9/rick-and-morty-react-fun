
const initialState = { isLocationsLoading: false }


export default function locations(state = initialState, action) {
    switch (action.type) {
        case 'GET_LOCATIONS_DATA':
            return { ...state, locationsData: action.payload, isLocationsLoading: false };
        case 'SET_LOCATIONS_FILTER':
            return { ...state, locationsFilter: action.payload };
        case 'CLEAR_LOCATIONS_FILTER':
            return { ...state, locationsFilter: {}};
        case 'LOCATIONS_LOADING':
            return { ...state, isLocationsLoading: action.payload };
        default:
            return state
    }
}