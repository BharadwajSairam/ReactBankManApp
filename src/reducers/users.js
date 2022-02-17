
const registrationReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_USER':
            return [...state,action.user]
        case 'EDIT_USER':
            return state.map((user)=>{
                if (action.id === user.id){
                   
                    return {
                        ...user,...action.updates
                    }
                }
                return user
            })
        default:
            return state
    }}

export const loanReducer = (state=[],action)=>{
        switch(action.type){
            case 'ADD_LOAN':
                console.log(state);
                return [...state,action.loanaccount]
            default:
                return state
        }}
    
    
export default registrationReducer;
