import React, {useState,useEffect} from 'react'
import AdminTitle from '../AdminTitle/AdminTitle'
import { useNavigate, useParams } from 'react-router-dom'
import NoticeForm from './NoticeForm'
import Swal from 'sweetalert2'
import { useShowByIdQuery, useUpdateMutation } from '@/api/notice.api'

const NoticeEdit = () => {
  const [loading,setLoading] = useState(false) 
  const [notice, setNotice] = useState()
  const params = useParams();
  const navigate = useNavigate() 

  const {data:notices, error, isLoading} = useShowByIdQuery(params.id)
  const [editNotice] = useUpdateMutation()

  useEffect(()=>{
    console.log("notice",notices)
    if(notices){
      setNotice(notices.data)
    }
  },[notices])

  const submitEvent =async(data)=>{
    setLoading(true);
      try{
        const submitData = {...data, category: data.category.value, priority: data.priority.value}
         
        await editNotice({id:params.id, payload:submitData}).unwrap();
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Notice updated successfully!",
          });
        navigate('/admin/notice')
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
            <AdminTitle label1=" Notice List" label2="/Edit_Notice" url="/admin/notice"/>
            <div className='Dashboard_title'>
                <h1>Edit Notice </h1>
            </div>
        </div>
        <div className="banner_form">
          <NoticeForm
           detail={
            notice
                ? {
                      title: notice.title,
                      category: {
                          label: notice.category === "academic" ? "Academic" : "administrative"? "Administrative" : "events"? "Events" : "Policy",
                          value: notice.category,
                      },
                      date: notice.date,
                      summary: notice.summary,
                      priority: {
                          label: notice.priority === "high" ? "High" : "Normal",
                          value: notice.priority,
                      },
                  }
                : null
              }          
            submitEvent={submitEvent} value='Update Notice'
          />
        </div>
    </div>
  )
}

export default NoticeEdit