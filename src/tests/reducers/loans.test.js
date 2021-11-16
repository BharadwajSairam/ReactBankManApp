import { loanReducer } from "../../reducers/users";

test('should set default state for loan', () => {
    const state = loanReducer(undefined, { type: 'UNKNOWN' })
    expect(state).toEqual([])
})

test('should set state for user based on given action', () => {
    const loanaccount = {
        'firstname': 'Sairam',
        lastname: 'Manchella',
        loan: 'Car',
        amount: 10000,
        username: 'Sai',
        email: 'sai@gmail.com',
        id: expect.any(String),
        contact: 123456789,
        occupation: 'Farmer'
    }
    const action = {
        type: 'ADD_LOAN',
        loanaccount: loanaccount
    }
    let loans = []
    loans.push(loanaccount)
    const state = loanReducer([], action)
    expect(state).toEqual(loans)
})
