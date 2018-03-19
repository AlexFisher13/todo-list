const initialState = [
        'learn React',
        'Clean my mac'
    ];

export default function taskList(state=initialState, action){
    if (action.type === 'task') {
        return [
            ...state,
            action.payload
        ];
    }
  return state;
}