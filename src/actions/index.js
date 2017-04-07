
export const addCounter = (numberV) => ({
    type: 'INCREMENT',
    numberV
});

export const decCounter = (numberV) => ({
    type: 'DECREMENT',
    numberV
});

export const viewCounter = () => ({
    type: 'VIEW',
});