import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import {  useNavigate } from 'react-router-dom'
import EventsForm from './GalleryForm';
import { useCreateMutation } from '../../../api/gallery.api';
import Swal from 'sweetalert2';

const GalleryAdd = () => {
  const [laoding, setLoading] = useState()
  const [createGallery] = useCreateMutation()
  const navigate = useNavigate()
  
  const submitGallery = async(data)=>{
    setLoading(true);
    try{
      const formData = new FormData();
      // Append form fields
      formData.append("title", data.title);
      
      if (data.category && data.category.length > 0) {
          data.category.forEach((collection) => {
              formData.append("category[]", collection.value); // Send collection IDs
          });
      }

      // Append files conditionally
      if (data.image instanceof File) {
          formData.append("image", data.image);
      }          
        await createGallery(formData).unwrap();
        Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Gallery added successfully',
                timer:1000
              })
        navigate('/admin/gallery')
    }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding gallery',
          timer:1000
        })
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
       <div className="admin_titles">
            <AdminTitle label1=" Gallery List" label2="/Add Gallery" url="/admin/gallery"/>
            <div className='Dashboard_title'>
                <h1>Add Gallery </h1>
            </div>
        </div>
        <div className="banner_form">
          <EventsForm submitEvent={submitGallery} loading={laoding} value='Add Gallery'/>
        </div>
    </div>
  )
}

export default GalleryAdd