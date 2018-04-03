const initialState = [
    {id: 1, text:'learn React'},
    {id: 2, text:'Clean my mac'}
];

export default function taskList(state=initialState, action){
    switch (action.type) {
        case('ADD_NOTE'):
            return [...state, action.payload];
        case('DEL_NOTE'):
            return state.filter(el => el.id !== action.payload);
        default:
            return state;
    }
}