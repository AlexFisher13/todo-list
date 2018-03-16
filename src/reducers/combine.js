import {combineRedusers} from 'redux'
import addNote from './addNote'

export default combineRedusers({
    addNote
});