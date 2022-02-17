import { connect, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { addLoan } from '../actions/users';
import axios from 'axios';
const Account = (props) => {

    const [loan, setloan] = useState('')
    const [amount, setAmount] = useState('')
    const [modal, setmodal] = useState(false)
    const [user, setUser] = useState({})
    const accounts = useSelector(state => state.loans)
    const [useraccounts, setuseraccounts] = useState([])

    useEffect(() => {
        setUser(props.user)
        let username=props.user.username;
        console.log(props.user.username);
        axios.post('http://localhost:8080/getAccounts',{username}).then(res=>{
            console.log(res.data);
            setuseraccounts(res.data)
        })
        console.log(accounts);
    }, [])
   
    const handlecreate = () => {
        setmodal(true)
    }
    const HandleSubmit = (e) => {
        e.preventDefault()
    }

    const closeModal = () => {
        setmodal(false)
    }

    const createaccount = () => {
        
        const accountData = { ...user, amount, loan }
        
        let account = {
            user:user.username,
            amount:amount,
            loan:loan
        }

        axios.post('http://localhost:8080/addAccount',{account}).then(res=>{
            console.log(res.data);
            let username = account.user
            axios.post('http://localhost:8080/getAccounts',{username}).then(res=>{
            console.log(res.data);
            setuseraccounts(res.data)
        })
        })
        console.log(accountData);
        props.dispatch(addLoan(accountData))
        
        setmodal(false)
        setloan('')
        setAmount(0)
    }
    
    const handleEdit = (account) => {
         console.log('clicked');
        console.log(account);
    }
    
    return (
        <div>
            <h3 className='text-center'>Accounts</h3>
            <input type='button' className='btn-primary' onClick={handlecreate} value='Create Account' />
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Personal Details"
            >
                <div className="d-flex justify-content-end">
                <button className='btn-primary' onClick={closeModal}>close</button>
                </div>
                <form onSubmit={HandleSubmit}>
                    <label>Loan Type :
                        <input type="text" name="FirstName" value={loan} onChange={(e) => setloan(e.target.value)} autoFocus /></label>
                    <label>Loan Amount :
                        <input type="number" name="LastName" value={amount} onChange={(e) => setAmount(e.target.value)} /></label>
                    <input type='button' value='create' className='btn-primary' onClick={createaccount} />
                </form>
            </Modal>
            {useraccounts &&
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Account</th>
                                <th scope="col">Loan amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {useraccounts.map((account, index) => {
                                console.log(account);
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{account.loan}</td>
                                        <td>{account.amount}</td>
                                    </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

const connectedAccount = connect()(Account)
export default connectedAccount