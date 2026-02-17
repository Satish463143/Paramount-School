import React, {useState} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import {  useNavigate } from 'react-router-dom'
import TeamForm from './TeamForm';
import { useCreateMutation } from '../../../api/team.api';
import Swal from 'sweetalert2';

const TeamAdd = () => {
  const [laoding, setLoading] = useState()
  const [createTeam] = useCreateMutation()
  const navigate = useNavigate()
  
  const submitEvent = async(data)=>{
    setLoading(true);
    try{
      const formData = new FormData();
      // Append form fields
      formData.append("name", data.name);
      formData.append("role", data.role);
      formData.append("qualification", data.qualification);

      // Append files conditionally
      if (data.image instanceof File) {
          formData.append("image", data.image);
      }          
        await createTeam(formData).unwrap();
        Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Team member added successfully',
                timer:1000
              })
        navigate('/admin/team')
    }catch(exception){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error adding team member',
          timer:1000
        })
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className='admin_margin_box'>
       <div className="admin_titles">
            <AdminTitle label1=" Team List" label2="/Add Team" url="/admin/team"/>
            <div className='Dashboard_title'>
                <h1>Add Team </h1>
            </div>
        </div>
        <div className="banner_form">
          <TeamForm submitEvent={submitEvent} loading={laoding} value='Add Team'/>
        </div>
    </div>
  )
}

export default TeamAdd