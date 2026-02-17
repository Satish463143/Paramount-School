import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import {  useNavigate } from 'react-router-dom'
import BannerForm from './BannerForm';
import { useCreateMutation } from '../../../api/banner.api';
import Swal from 'sweetalert2';

const BannersAdd = () => {
  const [laoding, setLoading] = useState()
  const [craeteBanner] = useCreateMutation()
  const navigate = useNavigate()
  
  const submitEvent = async(data)=>{
    setLoading(true);
    try{
      const formData = new FormData();
      // Append form fields
      formData.append("headline", data.headline);
      formData.append("subheadline", data.subheadline);
      formData.append("primaryCta", data.primaryCta || "");
      formData.append("primaryCtaLink", data.primaryCtaLink || "");
      formData.append("secondaryCta", data.secondaryCta || "");
      formData.append("secondaryCtaLink", data.secondaryCtaLink);
      formData.append("status", data.status.value);

      // Append files conditionally
      if (data.image instanceof File) {
          formData.append("image", data.image);
      }          
        await craeteBanner(formData).unwrap();
        Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Banner added successfully',
                timer:1000
              })
        navigate('/admin/banner')
    }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding banner',
          timer:1000
        })
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
       <div className="admin_titles">
            <AdminTitle label1=" Banner List" label2="/Add Banner" url="/admin/banner"/>
            <div className='Dashboard_title'>
                <h1>Add Banner </h1>
            </div>
        </div>
        <div className="banner_form">
          <BannerForm submitEvent={submitEvent} loading={laoding} value='Add Banner'/>
        </div>
    </div>
  )
}

export default BannersAdd