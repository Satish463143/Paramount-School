import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import {  useNavigate } from 'react-router-dom'
import NoticeForm from './NoticeForm';
import { useCreateMutation } from '../../../api/notice.api';
import Swal from 'sweetalert2';

const NoticeAdd = () => {
  const [laoding, setLoading] = useState()
  const [createNotice] = useCreateMutation()
  const navigate = useNavigate()
  
  const submitEvent = async(data)=>{
    setLoading(true);
    try{
        const submitData = {...data, category: data.category.value, priority: data.priority.value}
         
        await createNotice(submitData).unwrap();
        Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Notice added successfully',
                timer:1000
              })
        navigate('/admin/notice')
    }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding notice',
          timer:1000
        })
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
       <div className="admin_titles">
            <AdminTitle label1=" Notice List" label2="/Add Notice" url="/admin/notice"/>
            <div className='Dashboard_title'>
                <h1>Add Notice </h1>
            </div>
        </div>
        <div className="banner_form">
          <NoticeForm submitEvent={submitEvent} loading={laoding} value='Add Notice'/>
        </div>
    </div>
  )
}

export default NoticeAdd