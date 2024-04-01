import React from 'react'
import{BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import User from './comonents/User'
import CreateUser from './comonents/CreateUser'
import UpdateUser from './comonents/UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<User/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/update/:id' element={<UpdateUser/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App