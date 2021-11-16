import {v4 as uuid} from 'uuid'
const addUser=({firstname='',lastname='',username='',password='',email='',contact='',occupation=''}={})=>({
    type:'ADD_USER',
    user:{
        id:uuid(),
        firstname,
        lastname,
        username,
        email,
        contact,
        occupation,
        password
    }
}
)
export const editUser =(id,updates)=>({
type:'EDIT_USER',
id,updates
})

export const addLoan=({firstname='',lastname='',loan='',amount=0,username='',email='',contact='',occupation=''}={})=>({
    type:'ADD_LOAN',
    loanaccount:{
        id:uuid(),
        firstname,
        lastname,
        username,
        email,
        contact,
        occupation,
        loan,
        amount
    }
}
)

export default addUser