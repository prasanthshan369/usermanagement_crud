import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
   const {id}= useParams()
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const [email, setEmail] = useState('')
   const navigate=useNavigate()
   const [users, setUsers] = useState([])
   useEffect(()=>{
       axios.get('http://localhost:5000/getUser/'+id).then(res =>{
       setAge(res.data.age)
       setEmail(res.data.email)
       setName(res.data.name)

console.log(res);
       }
       ).catch(err =>console.log(err))
   },[])
   const handleUpdate=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/updateUser/'+id,{name,email,age}).then(res =>{
 console.log(res);
 navigate('/')
        }
        ).catch(err =>console.log(err))
   }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
            <form>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter Name' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Enter Email' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Age</label>
                    <input value={age} onChange={(e)=>{setAge(e.target.value)}} type='number' placeholder='Enter Age' className='form-control'/>
                </div>
                <button onClick={handleUpdate} className='btn btn-success'>Update</button>
            </form>

        </div>

</div>
  )
}

export default UpdateUser