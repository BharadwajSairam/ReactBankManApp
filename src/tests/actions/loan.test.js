import {addLoan} from "../../actions/users";

test('should create action object wth the provided user inputs',()=>{
    const loan = addLoan({'firstname':'Sairam',lastname:'Manchella',loan:'Car',amount:10000,username:'Sai',email:'sai@gmail.com',contact:123456789,occupation:'Farmer'})
    expect(loan).toEqual({
        type:'ADD_LOAN',
    loanaccount:{
        'firstname':'Sairam',
        lastname:'Manchella',
        loan:'Car',
        amount:10000,
        username:'Sai',
        email:'sai@gmail.com',
        id:expect.any(String),
        contact:123456789,
        occupation:'Farmer'}
    })
})
