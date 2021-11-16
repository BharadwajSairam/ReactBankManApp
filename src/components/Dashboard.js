import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { editUser } from '../actions/users';
import  Account from './Account';

const Dashboard = (props) => {
    const [userdetails, setuserdetails] = useState()
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [occupation, setoccupation] = useState('')
    const [contact, setcontact] = useState('')
    const [email, setemail] = useState('')
    const [modal, setModal] = useState(false)
    const users = useSelector(state => state.registrations)

    console.log(users);
    useEffect(() => {
        console.log('inside useeffect');
        let user=[]
         users.map((u) => {
            if (u.id === props.id) {
                user.push(u)
            }
        })
        console.log(user);
        setuserdetails(user[0]);
    }, [modal])

    const closeModal = () => {
        setModal(false)
    }

    const HandleEdit = (e) => {
        e.preventDefault()
        let update = {}
        if (firstname) {
            update['firstname'] = firstname
        }
        if (lastname) {
            update['lastname'] = lastname
        }
        if (email) {
            update['email'] = email
        }
        if (contact) {
            update['contact'] = contact
        }
        if (occupation) {
            update['occupation'] = occupation
        }
        console.log(update);
        setuserdetails({ ...userdetails, update })
        props.dispatch(editUser(userdetails.id, update))

        closeModal()
    }
    return (
        <div className='container'>
            <div className="d-flex justify-content-end">
                <Link to='/'>Logout</Link>
            </div>

            <h3 className="d-flex justify-content-center">Personal Details</h3>
            <div className="d-flex justify-content-end">
                <input type='button' className='btn-primary' value='Edit' onClick={() => setModal(true)} />
            </div>
            {userdetails &&
                <div className='grid'>
                    <div className='row'>
                        <div className='col'>
                            <p>First Name : {userdetails.firstname}</p>
                        </div>
                        <div className='col'>
                            <p>Last Name : {userdetails.lastname}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <p>Email : {userdetails.email}</p>
                        </div>
                        <div className='col'>
                            <p>Contact Number : {userdetails.contact}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <p>Occupation : {userdetails.occupation}</p>
                        </div>
                        <div className='col'>
                            <p>Last Name : {userdetails.lastname}</p>
                        </div>
                    </div>
                </div>
            }

            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Personal Details"
            >

                <button className='btn-primary' onClick={closeModal}>close</button>

                <form onSubmit={HandleEdit}>
                    <label>First Name :
                        <input type="text" name="FirstName" value={firstname} onChange={(e) => setfirstname(e.target.value)} autoFocus /></label>
                    <label>Last Name :
                        <input type="text" name="LastName" value={lastname} onChange={(e) => setlastname(e.target.value)} /></label>
                    <label>Email :
                        <input type="text" name="email" value={email} onChange={(e) => setemail(e.target.value)} /></label>
                    <label>Contact number :
                        <input type="number" name="contact" value={contact} onChange={(e) => setcontact(e.target.value)} /></label>
                    <label>Occupation :
                        <input type="text" name="Occupation" value={occupation} onChange={(e) => setoccupation(e.target.value)} /></label>
                    <input type='submit' className='btn-primary' value='Register' />
                </form>
            </Modal>
           <Account user={userdetails}/>
        </div>
    )
}

const connectedUsers = connect((state = {}) => {
    return {
        users: state.registrations
    }
})(Dashboard)
export default connectedUsers