import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router'
import addUser from '../actions/users'
import Header from './Header'
import axios from 'axios'
class Register extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        password: '',
        occupation: '',
        email: '',
        cpassword: '',
        contact: undefined,
        username: '',
        error: '',
        success: '',
        redirect: false
    }
    flag = false;
    onSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');

        const user = this.state;
        console.log(user);
        switch ('') {
            case user.firstname.trim():
                this.setState(() => ({ 'error': 'Please enter first name' }))
                break
            case user.lastname.trim():
                this.setState(() => ({ 'error': 'Please enter last name' }))
                break
            case user.username.trim():
                this.setState(() => ({ 'error': 'Please enter user name' }))
                break
            case user.password.trim():
                this.setState(() => ({ 'error': 'Please set a password' }))
                break
            case user.cpassword.trim():
                this.setState(() => ({ 'error': 'Please confirm the password' }))
                break
            case user.contact.trim():
                this.setState(() => ({ 'error': 'Please enter contact number' }))
                break
            case user.email.trim():
                this.setState(() => ({ 'error': 'Please enter email address' }))
                break
            case user.occupation.trim():
                this.setState(() => ({ 'error': 'Please enter your occupation' }))
                break
            default:
                this.flag = true
        }
        console.log(this.state);
        if (this.flag) {

            this.setState(() => ({ 'error': '' }))
            const userdetails = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                password: this.state.password,
                occupation: this.state.occupation,
                email: this.state.email,
                contact: this.state.contact,
                username: this.state.username,
            }
            this.setState(() => ({
                'firstname': '',
                'lastname': '',
                'password': '',
                'cpassword': '',
                'occupation': '',
                'email': '',
                'contact': '',
                'username': '',

            }))
            console.log(userdetails);
            axios.post(`http://sairam-manchella.us-east-1.elasticbeanstalk.com/register`, { userdetails }).then(res => {
                console.log(res);
            })
            console.log(this.props.dispatch(addUser(userdetails)))
            this.setState(() => ({ 'success': 'Registration Successful' }))
            setInterval(() => {
                this.setState(() => ({ 'redirect': true }))
            }, 3000)
        }
    }
    confError = ''
    checkConfirmPassword = (e) => {
        this.setState(() => ({ 'cpassword': e.target.value }))

        if (this.state.password !== e.target.value) {

            this.confError = 'Password and Confirm Password do not match'
        }
        else {
            this.confError = ''
        }
    }
    render() {
        return (
            <div>
                <Header />
                <h2 className='text-center' style={{ 'margin-top': '20px' }}>Register</h2>
                <div className='d-flex justify-content-center'>

                    {this.state.redirect && <Navigate to='/login' />}
                    <form style={{ 'margin': '20px' }} onSubmit={this.onSubmit}>
                        <input type="text" style={{ 'margin': '10px' }} name="FirstName" placeholder='First name' value={this.state.firstname} onChange={(e) => { this.setState(() => ({ 'firstname': e.target.value })) }} autoFocus />
                        <input type="text" style={{ 'margin': '10px' }} name="LastName" placeholder='Last name' value={this.state.lastname} onChange={(e) => { this.setState(() => ({ 'lastname': e.target.value })) }} />
                        <input type="text" style={{ 'margin': '10px' }} name="Username" placeholder='Username' value={this.state.username} onChange={(e) => { this.setState(() => ({ 'username': e.target.value })) }} />
                        <input type="password" style={{ 'margin': '10px' }} placeholder='password' name="Password" value={this.state.password} onChange={(e) => { this.setState(() => ({ 'password': e.target.value })) }} />
                        <input type="password" style={{ 'margin': '10px' }} placeholder='Confirm Password' name="ConfirmPassword" onChange={(e) => { this.checkConfirmPassword(e) }} />
                        <p>{this.confError}</p>
                        <input type="text" style={{ 'margin': '10px' }} name="email" placeholder='Email address' value={this.state.email} onChange={(e) => { this.setState(() => ({ 'email': e.target.value })) }} />
                        <input type="number" style={{ 'margin': '10px' }} name="contact" placeholder='Contact Number' value={this.state.contact} onChange={(e) => { this.setState(() => ({ 'contact': e.target.value })) }} />
                        <input type="text" style={{ 'margin': '10px' }} name="Occupation" placeholder='Occupation' value={this.state.occupation} onChange={(e) => { this.setState(() => ({ 'occupation': e.target.value })) }} />
                        <br />
                        <div className='d-flex justify-content-center'>
                            <input type='submit' className='btn-primary' style={{ 'margin': '10px' }} value='Register' />
                        </div>
                    </form>



                </div>
                <div className='d-flex justify-content-center'>
                    <p className='text-center' style={{ 'color': 'red' }}>{this.state.error}</p>
                    <p className='text-center' style={{ 'color': 'green' }}>{this.state.success}</p>
                </div>
            </div>
        )
    }
}

export default connect()(Register)
