import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import {  useNavigate } from 'react-router-dom'
import GalleryCategoryForm from './GalleryCategoryForm';
import { useCreateMutation } from '../../../api/galleryCategory.api';
import Swal from 'sweetalert2';

const GalleryCategoryAdd = () => {
  const [laoding, setLoading] = useState()
  const [createGalleryCategory] = useCreateMutation()
  const navigate = useNavigate()
  
  const submitGalleryCategory = async(data)=>{
    setLoading(true);
    try{
      const formData = new FormData();
      // Append form fields
      formData.append("title", data.title);
      formData.append("tagline", data.tagline);
      

      // Append files conditionally
      if (data.image instanceof File) {
          formData.append("image", data.image);
      }          
        await createGalleryCategory(formData).unwrap();
        Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Gallery Category added successfully',
                timer:1000
              })
        navigate('/admin/gallery')
    }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding gallery category',
          timer:1000
        })
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
       <div className="admin_titles">
            <AdminTitle label1=" Gallery Category List" label2="/Add Gallery Category" url="/admin/gallery"/>
            <div className='Dashboard_title'>
                <h1>Add Gallery Category </h1>
            </div>
        </div>
        <div className="banner_form">
          <GalleryCategoryForm submitEvent={submitGalleryCategory} loading={laoding} value='Add Gallery Category'/>
        </div>
    </div>
  )
}

export default GalleryCategoryAdd