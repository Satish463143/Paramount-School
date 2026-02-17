import React, { useEffect, useState} from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent,NoticeCategoryComponent,PriorityComponent } from '../InputForm/InputForm'

const NoticeForm = ({submitEvent,loading,value,detail=null}) => {
    const noticeDTO = Yup.object({
        title: Yup.string().min(3).max(50).required(),
        category: Yup.object({
            label: Yup.string().matches(/^(Academic|Administrative|Events|Policy)$/),
            value: Yup.string().matches(/^(academic|administrative|events|policy)$/).required()
        }).required(),
        date: Yup.string().min(3).max(50).required(),
        summary: Yup.string().min(3).max(500).required(),
        priority: Yup.object({
            label: Yup.string().matches(/^(High|Normal)$/),
            value: Yup.string().matches(/^(high|normal)$/).required()
        }).required(),
    });
     
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(noticeDTO)
    })

    useEffect(()=>{
        if(detail){
            setValue("title", detail.title)
            setValue("category", detail.category)
            setValue("date", detail.date)
            setValue("summary", detail.summary)
            setValue("priority", detail.priority)
        }
    },[detail, setValue])
    
  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <h3>Testimonal Details</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Title</label><br />
                <TextInputComponent
                    name="title"
                    control={control}
                    type='text'
                    placeholder='Title of the Notice'
                    errMsg={errors?.title?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="role">Summary</label><br />
                <TextInputComponent
                    name="summary"
                    control={control}
                    placeholder='Summary of the Notice'
                    errMsg={errors?.summary?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="date">Date</label><br />
                <TextInputComponent
                    name="date"
                    control={control}
                    type='date'
                    placeholder="Date of the Notice"
                    errMsg={errors?.date?.message}
                    required:true
                />
            </div> 
            <div>
                <label htmlFor="category">Category</label><br />
                <NoticeCategoryComponent
                    name="category"
                    control={control}
                    errMsg={errors?.category?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="priority">Priority</label><br />
                <PriorityComponent
                    name="priority"
                    control={control}
                    errMsg={errors?.priority?.message}
                    required:true
                />
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input className='submit_btn' type="submit" value={value} disabled={loading} style={{cursor:'pointer'}}/>
        </div>
    </form>
  )
}

export default NoticeForm