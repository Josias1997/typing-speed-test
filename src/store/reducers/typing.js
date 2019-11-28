import { getRandomWords } from "../../utilities/getData";
import * as actionTypes from "./../actions/actionTypes";
import { updateObject } from "../../utilities/updateObject";

const initialState = {
    defaultTimeLimit: 60,
    words: getRandomWords,
    currentWord: 0,
    inputCurrentValue: '',
    startedTest: false,
    finishedTest: false,
};

const handleChange = (state, action) => {
    return updateObject(state, {
        inputCurrentValue: action.value
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_WORD_VALUE:
            return handleChange(state, action);
        default:
            return state;
    }
};

export default reducer;