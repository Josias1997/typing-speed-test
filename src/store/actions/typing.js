import * as actionTypes from "./actionTypes";

export const handleChange = (event) => {
    return  {
        type: actionTypes.CHANGE_CURRENT_WORD_VALUE,
        value: event.target.value,
    }
}