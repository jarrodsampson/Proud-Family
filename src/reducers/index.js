import { combineReducers } from 'redux'
import counter from './counter'

const movieCounter = combineReducers({
    counter
});

export default movieCounter