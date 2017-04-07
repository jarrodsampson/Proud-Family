const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(action.type);
            console.log(state + action.numberV);
            return state + action.numberV;
        case 'DECREMENT':
            console.log(action.type);
            console.log(state - action.numberV);
            return state - action.numberV;
        default:
            console.log(state);
            return state
    }
};

export default counter;