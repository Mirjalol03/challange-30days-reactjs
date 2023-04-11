import { SET_THEME } from "./types";

export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case SET_THEME:
        return {
            theme: action.payload,
        };
        default:
        return state;
    }
}