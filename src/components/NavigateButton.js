import React from 'react'
import { Link } from 'react-router-dom'
const NavigateButton = (props) => {
    return (
        <div>
            <div className="d-flex flex-row-reverse">
                
                <div className="p-2"><Link to='/login'>Login</Link></div>
                <div className="p-2"><Link to='/register'>Register</Link></div>
                </div>
                <div className="d-flex justify-content-center"><h2 className='text-center'>Bank Management Application</h2></div>
            
        </div>
    )
}
export default NavigateButton;