import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000').then(res =>setUsers(res.data)).catch(err =>console.log(err))
    },[])
    const handleDelete=(id)=>{
        axios.post('http://localhost:5000/deleteUser/'+id).then(res =>{
            window.location.reload()
        }).catch(err =>console.log(err))

    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='bg-white rounded p-3'>
        <Link to={'/create'} className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                <Link to={'/update/'+user._id} className='btn btn-warning mx-2'>Update</Link>
                                <Link  className='btn btn-danger px-2' onClick={()=>{handleDelete(user._id)}}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default User