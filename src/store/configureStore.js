import {createStore,combineReducers} from 'redux'

import registrationReducer, { loanReducer } from '../reducers/users'

export default ()=>{
    const store=createStore(combineReducers({
        registrations:registrationReducer,
        loans:loanReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

