import { EMLINK } from "constants";
import { combineReducers } from "../../node_modules/redux";

const initState = {
    todo:[{label:"javascripe", completed:true},
        {label:"java", completed:false}],
    display:"All"
}

const todos = (state = initState.todo, action) => {
    if(action.type === 'ADD_TODO'){
        let newState = [...state];
        newState.push(action.data);
        return newState;
    }
    if(action.type === 'DESTORY_ELM'){
        let newState = [...state];
        newState.splice(action.data,1);
        return newState;
    }
    if(action.type === 'CHOOSE_TODO'){
        // let newState = [...state];
        // newState[action.data].completed = !newState[action.data].completed
        return state.map((item, idx) => {
            return Object.assign({}, item, {
              completed: idx === action.data ? !item.completed : item.completed
            })
          })
    }
    if(action.type === 'TOGGLE_ALL'){
        return state.map(elm => {
            return Object.assign({}, elm, elm.completed=action.data);
        })
    }
    if(action.type === 'CLEAR_COMPLETED'){
        let newState=[...state];
        return newState.filter(elm => !elm.completed);
    }
    if(action.type === 'GET_NEW_TEXT'){
        return state.map((elm, id) => {
            return Object.assign({}, elm, {
                label: id === action.data.id ? action.data.text : elm.label
            })
        })
    }
    return state;
}

const displaySelect = (state = initState.display, action) => {
    if(action.type === 'DISPLAT_PATTERN'){
        state=action.data;
    }
    return state;
}

const reducer = combineReducers({
    todos:todos,
    display:displaySelect
})

export default reducer