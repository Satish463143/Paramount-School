import React, {useState,useEffect} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useNavigate, useParams } from 'react-router-dom'
import BannerForm from './BannerForm'
import Swal from 'sweetalert2'
import { useShowByIdQuery, useUpdateMutation } from '@/api/banner.api'

const BannerEdit = () => {
  const [loading,setLoading] = useState(false) 
  const [banners, setBanners] = useState()
  const params = useParams();
  const navigate = useNavigate() 

  const {data:banner, error, isLoading} = useShowByIdQuery(params.id)
  const [editBanner] = useUpdateMutation()

  useEffect(()=>{
    console.log("banner",banner)
    if(banner){
      setBanners(banner.data)
    }
  },[banner])

  const submitEvent =async(data)=>{
    setLoading(true);
      try{
        const formData = new FormData();
        // Append form fields
        formData.append("headline", data.headline);
        formData.append("subheadline", data.subheadline || "");
        formData.append("primaryCta", data.primaryCta || "");
        formData.append("primaryCtaLink", data.primaryCtaLink || "");
        formData.append("secondaryCta", data.secondaryCta || "");
        formData.append("secondaryCtaLink", data.secondaryCtaLink || "");
        formData.append("status", data.status.value);

        // Append files conditionally
        if (data.image instanceof File) {
            formData.append("image", data.image);
        }          
        await editBanner({id:params.id, payload:formData}).unwrap();
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Banner updated successfully!",
          });
        navigate('/admin/banner')
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
            <AdminTitle label1=" Banner List" label2="/Edit_Banner" url="/admin/banner"/>
            <div className='Dashboard_title'>
                <h1>Edit Banner </h1>
            </div>
        </div>
        <div className="banner_form">
          <BannerForm
           detail={
            banners
                ? {
                      headline: banners.headline,
                      subheadline: banners.subheadline,
                      status: {
                          label: banners.status === "active" ? "Active" : "Inactive",
                          value: banners.status,
                      },
                      primaryCta: banners.primaryCta,
                      primaryCtaLink: banners.primaryCtaLink,
                      secondaryCta: banners.secondaryCta,
                      secondaryCtaLink: banners.secondaryCtaLink,
                      image: banners.image,
                  }
                : null
              }          
            submitEvent={submitEvent} value='Update Banner'
          />
        </div>
    </div>
  )
}

export default BannerEdit