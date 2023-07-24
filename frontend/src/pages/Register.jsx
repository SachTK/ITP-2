import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'



function Register() {
    const  [formData, setFormData]=useState({   //an object and that object have several attributes name, email, pw, pw2
        name:'',                                //default values are empty strings
        email:'',
        password:'',
        password2: ''
    })

    const {name, email,password,password2}=formData   //This line uses object destructuring to extract the individual attributes (name, email, password, and password2) from the formData object. After this line, you can use these variables directly instead of accessing them through formData.name, formData.email, etc.
                                                            //The line const {name, email, password, password2} = formData; is like taking values from a box and giving them individual names.
                                                            //Imagine formData is a box, and inside that box, we have four smaller boxes named name, email, password, and password2. Each of these smaller boxes contains some information (initially empty strings).
                                                            //With the line const {name, email, password, password2} = formData;, we open the big box (formData) and take out the contents from the four smaller boxes and assign them to four new variables, which are simply named name, email, password, and password2. Now you can use these new variables directly to access the values inside them, like name, email, etc., instead of writing formData.name, formData.email, etc. It's a more convenient way to work with the data inside the formData object.
     
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user, isLoading, isError, isSuccess, message}= useSelector(
        (state)=> state.auth         
    )

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message,navigate,dispatch])
     
     
    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,       //name is the name of the input field ex: name='email'  , name='name'
        }))
     }

     const onSubmit = (e) =>{
        e.preventDefault()

        if(password !== password2){
            toast.error('passwords do not match')
        }else {
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
        }
     }

     if(isLoading){
        return <Spinner/>
     }
    
     return (
    <>
    <section className="heading">
        <h1>
            <FaUser/> Register
        </h1>
        <p>Please create an account</p>
    </section>

    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <input type="text" className="form-control" id='name'  name='name' value={name} 
            placeholder='Eneter your name' onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type="email" className="form-control" id='email'  name='email' value={email} 
            placeholder='Eneter your email' onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type="password" className="form-control" id='password'  name='password' value={password} 
            placeholder='Enter your password' onChange={onChange}/>
            </div>

            <div className="form-group">
            <input type="password" className="form-control" id='password2'  name='password2' value={password2} 
            placeholder='Confirm password' onChange={onChange}/>
            </div>

            <div className="form-group">
                <button type="submit" className='btn btn-block'>Submit</button>
            </div>
            
        </form>
    </section>
    </>
  )
}

export default Register