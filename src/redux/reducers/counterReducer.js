import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "../types/counterType"

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT_NUMBER) {
        return {
            ...state.count,
            count: state.count + 1
        }
    }
    if(action.type === DECREMENT_NUMBER) {
        return {
            ...state.count,
            count: state.count - 1
        }
    }
    return state;
}

export default counterReducer;