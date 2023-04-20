import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "../types/counterType";


export function incrementNumber() {
    return {
        type: INCREMENT_NUMBER
    }
}

export function decrementNumber() {
    return {
        type: DECREMENT_NUMBER
    }
}