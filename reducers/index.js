import { ITEMS_RECEIVED, POST_RECEIVED } from '../actions';


const initialState = {
    albums: [],
    album: {}
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ITEMS_RECEIVED:
            return {...state, albums: action.payload};
        case POST_RECEIVED:
            return {...state, album: action.payload};
        default:
            return state;
    }
}
