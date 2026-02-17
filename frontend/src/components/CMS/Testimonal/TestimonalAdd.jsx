import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import {  useNavigate } from 'react-router-dom'
import TestimonalForm from './TestimonalForm';
import { useCreateMutation } from '../../../api/testimonal.api';
import Swal from 'sweetalert2';

const TestimonalAdd = () => {
  const [laoding, setLoading] = useState()
  const [createTestimonal] = useCreateMutation()
  const navigate = useNavigate()
  
  const submitEvent = async(data)=>{
    setLoading(true);
    try{
      const formData = new FormData();
      // Append form fields
      formData.append("author", data.author);
      formData.append("role", data.role);
      formData.append("message", data.message);

      // Append files conditionally
      if (data.avatar instanceof File) {
          formData.append("avatar", data.avatar);
      }          
        await createTestimonal(formData).unwrap();
        Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Testimonal added successfully',
                timer:1000
              })
        navigate('/admin/testimonal')
    }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding testimonal',
          timer:1000
        })
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
       <div className="admin_titles">
            <AdminTitle label1=" Testimonal List" label2="/Add Testimonal" url="/admin/testimonal"/>
            <div className='Dashboard_title'>
                <h1>Add Testimonal </h1>
            </div>
        </div>
        <div className="banner_form">
          <TestimonalForm submitEvent={submitEvent} loading={laoding} value='Add Testimonal'/>
        </div>
    </div>
  )
}

export default TestimonalAdd