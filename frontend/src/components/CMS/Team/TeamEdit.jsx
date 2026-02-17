import React, {useState,useEffect} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useNavigate, useParams } from 'react-router-dom'
import TeamForm from './TeamForm'
import Swal from 'sweetalert2'
import { useShowByIdQuery, useUpdateMutation } from '@/api/team.api'

const TeamEdit = () => {
  const [loading,setLoading] = useState(false) 
  const [banners, setBanners] = useState()
  const params = useParams();
  const navigate = useNavigate() 

  const {data:banner, error, isLoading} = useShowByIdQuery(params.id)
  const [editTeam] = useUpdateMutation()

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
        formData.append("name", data.name);
        formData.append("role", data.role || "");
        formData.append("qualification", data.qualification || "");

        // Append files conditionally
        if (data.image instanceof File) {
            formData.append("image", data.image);
        }          
        await editTeam({id:params.id, payload:formData}).unwrap();
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Team member updated successfully!",
          });
        navigate('/admin/team')
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
            <AdminTitle label1=" Team List" label2="/Edit_Team" url="/admin/team"/>
            <div className='Dashboard_title'>
                <h1>Edit Team </h1>
            </div>
        </div>
        <div className="banner_form">
          <TeamForm
           detail={
            banners
                ? {
                      name: banners.name,
                      role: banners.role,
                      qualification: banners.qualification,
                      image: banners.image,
                  }
                : null
              }          
            submitEvent={submitEvent} value='Update Team'
          />
        </div>
    </div>
  )
}

export default TeamEdit