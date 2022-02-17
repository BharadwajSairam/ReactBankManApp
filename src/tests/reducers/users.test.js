import registrationReducer, {loanReducer} from "../../reducers/users";

test('should set default state',()=>{
    const state= registrationReducer(undefined,{type:'UNKNOWN'})
    expect(state).toEqual([])
})


test('should modify state for user based on given action',()=>{
    const user={
        'firstname':'Sairam',
        'lastname':'Manchella',
        'occupation':'Developer',
        'email':'te@gmail.com',
        'contact':12345,
        'password':'abcde@123',
        'id':'123',
        'username':'abcde'}

    

    const modifieduser={
        'firstname':'Sairam',
        'lastname':'Manchella',
        'occupation':'FSE',
        'email':'te@gmail.com',
        'contact':12345,
        'password':'abcde@123',
        'id':'123',
        'username':'abcde'}
    let MUsers=[]
    MUsers.push(modifieduser)
    const action={
        'type':'EDIT_USER',
        'id':'123',
        'updates':modifieduser
    }
    let users=[]
    users.push(user)
    const state=registrationReducer(users,action)
    expect(state).toEqual(MUsers)
})