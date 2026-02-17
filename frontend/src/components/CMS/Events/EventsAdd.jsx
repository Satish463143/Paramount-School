import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import {  useNavigate } from 'react-router-dom'
import EventsForm from './EventsForm';
import { useCreateMutation } from '../../../api/events.api';
import Swal from 'sweetalert2';

const EventsAdd = () => {
  const [laoding, setLoading] = useState()
  const [createEvent] = useCreateMutation()
  const navigate = useNavigate()
  
  const submitEvent = async(data)=>{
    setLoading(true);
    try{
      const formData = new FormData();
      // Append form fields
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("date", data.date);

      // Append files conditionally
      if (data.image instanceof File) {
          formData.append("image", data.image);
      }          
        await createEvent(formData).unwrap();
        Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Event added successfully',
                timer:1000
              })
        navigate('/admin/events')
    }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding event',
          timer:1000
        })
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
       <div className="admin_titles">
            <AdminTitle label1=" Events List" label2="/Add Events" url="/admin/events"/>
            <div className='Dashboard_title'>
                <h1>Add Events </h1>
            </div>
        </div>
        <div className="banner_form">
          <EventsForm submitEvent={submitEvent} loading={laoding} value='Add Events'/>
        </div>
    </div>
  )
}

export default EventsAdd