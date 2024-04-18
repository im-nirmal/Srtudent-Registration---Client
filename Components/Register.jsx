import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate()
    //state for form
    const [inputData,setInputData] = useState({
        firstName:"",lastName:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""
    })
    console.log(inputData);

    //cancel
    const handleCancel = ()=>{
        setInputData({
            firstName:"",lastName:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""
        })
    }

    //register
    const handleRegister = async(e)=>{
        e.preventDefault()
        //empty
        if(inputData.firstName && inputData.lastName && inputData.address && inputData.email && inputData.gender && inputData.mobile && inputData.password && inputData.dob && inputData.course){
            //api call
            try{
                const result = await registerAPI(inputData)
            console.log(result);
            if(result.status==200){
                toast.success("Registered Successfully...")
                setInputData({
                    firstName:"",lastName:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""
                })
                setTimeout(()=>{
                    navigate('/details')
                },2000)
            }else{
                toast.error(result.response.data)
            }
            }catch(err){
                console.log(err);
            }
        }else{
            toast.warning("Please fill the form completely")
        }
    }

  return (
    <>
        <div className="container mt-5">
            <div className="  bg-success mb-5">
                <h1 className='text-center'>Student Registration</h1>
                <div className='mt-5'>
                    <div className="row">
                        <div className="col-lg-5 ms-2">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control value={inputData.firstName} onChange={e=>setInputData({...inputData,firstName:e.target.value})} type="text" placeholder="First Name" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={inputData.lastName} onChange={e=>setInputData({...inputData,lastName:e.target.value})} type="text" placeholder="Last Name" />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control value={inputData.address} onChange={e=>setInputData({...inputData,address:e.target.value})} as="textarea" rows={3} />
                             </Form.Group>
    
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={inputData.email} onChange={e=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Form>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Gender</label>
                            <select className='form-select' name='gender' value={inputData.gender} onChange={e=>setInputData({...inputData,gender:e.target.value})}>
                                <option value="Select Gender">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        </div>


                        
                        <div className="col-lg-5 ms-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control value={inputData.mobile} onChange={e=>setInputData({...inputData,mobile:e.target.value})} type="number" placeholder="Mobile" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={inputData.password} onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Date of Birth</label>
                            <input type="date" value={inputData.dob} onChange={e=>setInputData({...inputData,dob:e.target.value})} name="dob" id="" className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Course</label>
                            <select value={inputData.course} onChange={e=>setInputData({...inputData,course:e.target.value})} className='form-select' name='course'>
                                <option value="Select Course">Select Course</option>
                                <option value="Biology">Biology</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Humanities">Humanities</option>
                            </select>
                        </div>

                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-5 mb-5 '>
                    <button onClick={handleRegister} className='btn btn-info' type='submit'>Register</button>
                    <button onClick={handleCancel} className='btn btn-danger ms-3'>Cancel</button>
                </div>
            </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Register