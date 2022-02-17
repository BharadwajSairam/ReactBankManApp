import React from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import BankMapp from './BankMApp'
import Login from './Login'
import Register from './Register'

const AppRoutes=()=>{
    return(
        <Router>
        <Routes>
        
        <Route exact path="/" element={<BankMapp/>}/>
        
        <Route path="/login" element={<Login/>}>
          
        </Route>
        <Route path="/register" element={<Register/>}>
         
        </Route>
        
        <Route  path="/dashboard" element={<Dashboard/>}/>
      </Routes>      
    </Router>

    )
}
    


export default AppRoutes