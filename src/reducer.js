export default function taskList(state=[], action){
    switch (action.type) {
        case('ADD_NOTE'):
            return [...state, action.payload];
        case('DEL_NOTE'):
            return state.filter(el => el.id !== action.payload);
        default:
            return state;
    }
}