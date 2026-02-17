import React, {useState,useEffect} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useNavigate, useParams } from 'react-router-dom'
import EventsForm from './EventsForm'
import Swal from 'sweetalert2'
import { useShowByIdQuery, useUpdateMutation } from '@/api/events.api'

const EventsEdit = () => {
  const [loading,setLoading] = useState(false) 
  const [event, setEvent] = useState()
  const params = useParams();
  const navigate = useNavigate() 

  const {data:events, error, isLoading} = useShowByIdQuery(params.id)
  const [editEvent] = useUpdateMutation()

  useEffect(()=>{
    if(events){
      setEvent(events.data)
    }
  },[events])

  const submitEvent =async(data)=>{
    setLoading(true);
      try{
        const formData = new FormData();
        // Append form fields
        formData.append("title", data.title);
        formData.append("description", data.description || "");
        formData.append("date", data.date || "");

        // Append files conditionally
        if (data.image instanceof File) {
            formData.append("image", data.image);
        }          
        await editEvent({id:params.id, payload:formData}).unwrap();
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Event updated successfully!",
          });
        navigate('/admin/events')
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
            <AdminTitle label1=" Events List" label2="/Edit_Event" url="/admin/events"/>
            <div className='Dashboard_title'>
                <h1>Edit Events </h1>
            </div>
        </div>
        <div className="banner_form">
          <EventsForm
           detail={
            event
                ? {
                      title: event.title,
                      description: event.description,
                      date: event.date,
                      image: event.image,
                  }
                : null
              }          
            submitEvent={submitEvent} value='Update Event'
          />
        </div>
    </div>
  )
}

export default EventsEdit