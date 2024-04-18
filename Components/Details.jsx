import React, { useEffect, useState } from 'react'
import { getStudentsAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'

function Details() {
    const navigate = useNavigate()
    const [displayData,setDisplayData] = useState([])

    useEffect(()=>{
        getstudents()
    },[])
    

    const getstudents = async()=>{
        const result = await getStudentsAPI()
        if(result.status ==200){
            setDisplayData(result.data)
        }
    }

    const handleHome = ()=>{
        navigate('/')
    }
    console.log(displayData);
  return (
    <>
    <div className="container mt-5">
        <h2 className='text-center text-info'>Registration Details</h2>
        <table className='table border mt-2'>
            <thead className='border'>
                <th className='border'>#</th>
                <th className='border'>First Name</th>
                <th className='border'>Last Name</th>
                <th className='border'>Address</th>
                <th className='border'>E-Mail</th>
                <th className='border'>Gender</th>
                <th className='border'>Mobile</th>
                <th className='border'>Date Of Birth</th>
                <th className='border'>Course</th>
            </thead>
            <tbody className='border'>
                {   displayData?.length > 0 && displayData?.map((ele,index)=>(
                    <tr key={ele}>
                    <td className='border'>{index+1}</td>
                    <td className='border'>{ele.firstName}</td>
                    <td className='border'>{ele.lastName}</td>
                    <td className='border'>{ele.address}</td>
                    <td className='border'>{ele.email}</td>
                    <td className='border'>{ele.gender}</td>
                    <td className='border'>{ele.mobile}</td>
                    <td className='border'>{ele.dob}</td>
                    <td className='border'>{ele.course}</td>
                </tr>
                ))
                    
                }
            </tbody>
        </table>
        <div className='d-flex justify-content-center'>
            <button onClick={handleHome} className='btn btn-dark'>HOME</button>
        </div>
       
    </div>
    </>
  )
}

export default Details