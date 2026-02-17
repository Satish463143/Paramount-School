import React, {useState,useEffect} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useNavigate, useParams } from 'react-router-dom'
import TestimonalForm from './TestimonalForm'
import Swal from 'sweetalert2'
import { useShowByIdQuery, useUpdateMutation } from '@/api/testimonal.api'

const TestimonalEdit = () => {
  const [loading,setLoading] = useState(false) 
  const [testimonal, setTestimonal] = useState()
  const params = useParams();
  const navigate = useNavigate() 

  const {data:testimonals, error, isLoading} = useShowByIdQuery(params.id)
  const [editTestimonal] = useUpdateMutation()

  useEffect(()=>{
    console.log("testimonal",testimonals)
    if(testimonals){
      setTestimonal(testimonals.data)
    }
  },[testimonals])

  const submitEvent =async(data)=>{
    setLoading(true);
      try{
        const formData = new FormData();
        // Append form fields
        formData.append("author", data.author);
        formData.append("role", data.role || "");
        formData.append("message", data.message || "");

        // Append files conditionally
        if (data.avatar instanceof File) {
            formData.append("avatar", data.avatar);
        }          
        await editTestimonal({id:params.id, payload:formData}).unwrap();
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Testimonal updated successfully!",
          });
        navigate('/admin/testimonal')
      }catch(exception){
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong!",

          });
      }finally{
          setLoading(false)
      }
  }
  return (
    <div className='admin_margin_box'>
        <div className="admin_titles">
            <AdminTitle label1=" Testimonal List" label2="/Edit_Testimonal" url="/admin/testimonal"/>
            <div className='Dashboard_title'>
                <h1>Edit Testimonal </h1>
            </div>
        </div>
        <div className="banner_form">
          <TestimonalForm
           detail={
            testimonal
                ? {
                      author: testimonal.author,
                      role: testimonal.role,
                      message: testimonal.message,
                      avatar: testimonal.avatar,
                  }
                : null
              }          
            submitEvent={submitEvent} value='Update Testimonal'
          />
        </div>
    </div>
  )
}

export default TestimonalEdit