import addUser,{editUser} from "../../actions/users";

test('should create action object wth the provided user inputs',()=>{
    const user = addUser({'firstname':'Sairam','lastname':'Manchella','occupation':'Developer','email':'te@gmail.com','contact':12345,'password':'abcde@123','username':'abcde'})
    expect(user).toEqual({
        type:'ADD_USER',
    user:{
        'firstname':'Sairam',
        'lastname':'Manchella',
        'occupation':'Developer',
        'email':'te@gmail.com',
        'contact':12345,
        'password':'abcde@123',
        'id':expect.any(String),
        'username':'abcde'}
    })
})


test('should create action object with given updated inputs',()=>{
    const user = editUser('1234',{'firstname':'Sairam','lastname':'Manchella','occupation':'Developer','email':'te@gmail.com','contact':12345})
    expect(user).toEqual({
        type:'EDIT_USER','id':'1234',
    'updates':{
        'firstname':'Sairam',
        'lastname':'Manchella',
        'occupation':'Developer',
        'email':'te@gmail.com',
        'contact':12345}
    })
})
