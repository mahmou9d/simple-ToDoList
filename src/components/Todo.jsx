import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { Remove, Update_data  } from '../redex/actions/action';
import { Delete } from './context/ContextProvider';
const Todo = () => {
  // @ts-ignore
  const {dltask,setDltask}=useContext(Delete)
  // @ts-ignore
  const { User_data } = useSelector((state) => state.todoreducers);
  console.log(User_data)
  const [show,setShow]=useState(false)
  const [showValue,setShowValue]=useState()
  const dispatch=useDispatch()
  const [watch,setWatch]=useState(false)
  const [update,setUpdate] =useState("")
  const [ind,setInd]=useState("")
  const handleShow =(e)=>{
    // setWatch(true)
    setUpdate(e)
  }

  const handleClose = () => setWatch(false);
  const remove=(id)=>{
    dispatch(Remove(id))
    setDltask(true)
  }
  const Update=()=>{
    dispatch(Update_data(update,ind))
    handleClose()
  }
  return (
    <>
      <div className='todo_data col-lg-5 mx-auto mt-2'style={{backgroundColor:"aqua",borderRadius:"8px"}}>
        <>
        {User_data.map(( e ,i)=>{
          return(
             <div key={i} className='todo_container d-flex justify-content-between align-items-center px-3'style={{backgroundColor:"#25cece94",borderRadius:"20px"}}>
            <li style={{listStyle:"none",fontSize:"24px"}}>{e}</li>
            <div onClick={()=>{
              handleShow(e)
              setInd(i)
            }} className='edit_dlt col-lg-3 py-3 d-flex justify-content-between align-items-center'>
                <EditIcon onClick={()=>{setWatch(true)}} sx={{color:"blue",cursor:"pointer"}}/>
                <DeleteIcon onClick={()=>remove(i)} sx={{color:"red",cursor:"pointer"}}/>
                <RemoveRedEyeIcon  sx={{color:"black",cursor:"pointer"}} onClick={()=>{
                  setShowValue(e)
                  setShow(true)}}/>
            </div>
        </div>
          )
        })}

        </>
       <Modal show={show}>
        
        <Modal.Footer style={{display:"flex",justifyContent:"space-between",borderBottom: "5px solid #19d2d0",borderTop: "5px solid #19d2d0"}}>
          <h1 style={{fontSize:"20px"}}>{showValue}</h1>
          <Button style={{backgroundColor:"#19d2d0"}} variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={watch} onHide={handleClose}>
        <h1>update your task</h1>
        <Modal.Header>
          <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                <input onChange={(e)=>setUpdate(e.target.value)} type="form-control" style={{width:"100%",height:"7vh",padding:"5px 15px",fontSize:"20px",outline:"none"}} />
            </div>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>Update()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  )
}

export default Todo
