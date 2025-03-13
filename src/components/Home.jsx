import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add } from '../redex/actions/action';
const Home = () => {
  const [data,setData] = useState("")
  console.log(data)
  const dispatch = useDispatch()
  const addData =()=>{
    dispatch(Add(data))
  }
  return (
    <>
      <div className='container'>
        <section  className='mt-3 text-center'>
            <h3 style={{fontWeight:"bold"}}>Enter Your Task</h3>
            <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                <input onChange={(e)=>setData(e.target.value)} type="form-control" style={{width:"100%",height:"7vh",padding:"5px 15px",fontSize:"20px",outline:"none"}} />
                <Button onClick={()=>addData()} variant='contained' style={{backgroundColor:"#19d2d0",height:"7vh"}}className='mx-2'>
                    <AddIcon/></Button>
            </div>
            <Todo/>
        </section>
      </div>
    </>
  )
}

export default Home

