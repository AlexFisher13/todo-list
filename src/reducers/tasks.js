const initialState = [
    {id: 1, text:'learn React'},
    {id: 2, text:'Clean my mac'}
];

export default function taskList(state=initialState, action){
    if (action.type === 'ADD_TASK') {
        return [
            ...state,
            action.payload
        ];
    }
  return state;
}