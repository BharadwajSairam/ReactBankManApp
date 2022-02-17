import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from './Header'
function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState('')
    const [flag, setFlag] = useState(false)
    const [userid, setUserid] = useState('')

    const handleLogin = (e) => {
        let validateuser = {
            username: username,
            password: password
        }
        
        axios.post("http://localhost:8080/validateUser", { validateuser }).then(res => {
            
            if (res.data.trim() == "Invalid Username") {
                setFlag(false)
                setError("Invalid Username")
                
            } else if (res.data.trim() == "Invalid Password") {
                setFlag(true)
               
                setError('Password is incorrect')
            } else {
                
                setUserid(username)
                setError('')
                setUsername('')
                setPassword('')
                setRedirect(true)
            }
        })

        e.preventDefault()
        
        if (!flag) {
            setError('Username is incorrect')
        }
    }
    return (
        <div>
            {redirect ? <Dashboard id={userid} /> :
                <div>
                    <Header />
                    <h1 className='text-center' style={{ 'margin': '15px' }}>Login</h1>
                    <form className="d-flex justify-content-center" onSubmit={handleLogin}>
                        <div style={{ 'width': '30%' }}>
                            <div className='container'>

                                <div className='row' style={{ 'margin': '15px' }}>
                                    <input type="text" placeholder='Username' name="Username" onChange={(e) => setUsername(e.target.value)} />

                                </div>
                                <div className='row' style={{ 'margin': '15px' }}>
                                    <input type="password" placeholder='Password' name="Password" onChange={(e) => setPassword(e.target.value)} /><br />

                                </div>
                                <div className="d-flex justify-content-center" style={{ 'margin': '15px' }}>
                                    <input type='submit' className='btn-primary' value='Login' />
                                </div>
                                <p style={{ 'color': 'red' }}>{error}</p>
                                <div>
                                    Click here to <Link to='/register'>Register</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

const connectedLogin = connect((state = {}) => {
    return state
})(Login)

export default connectedLogin