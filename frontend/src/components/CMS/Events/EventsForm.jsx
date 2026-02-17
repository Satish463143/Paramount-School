import React, { useEffect, useState} from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent, } from '../InputForm/InputForm'

const EventsForm = ({submitEvent,loading,value,detail=null}) => {
    const [imagePreview, setImagePreview] = useState(null);
    const eventsDTO = Yup.object({
        title: Yup.string().min(3).max(50).required(),
        description: Yup.string().min(3).max(500).required(),
        date: Yup.string().min(3).max(50).required(),
        image: Yup.mixed().required("Image is required"),
    });
     
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(eventsDTO)
    })

    useEffect(()=>{
        if(detail){
            setValue("title", detail.title)
            setValue("description", detail.description)
            setValue("date", detail.date)
            setValue("image", detail.image)

            setImagePreview(detail.image)
        }
    },[detail, setValue])
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValue('image', file);
            // Create preview URL for the new file
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <h3>Events Details</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Events Title</label><br />
                <TextInputComponent
                    name="title"
                    control={control}
                    type='text'
                    placeholder='Name of the Events'
                    errMsg={errors?.title?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="role">Description</label><br />
                <TextInputComponent
                    name="description"
                    control={control}
                    placeholder='Description of the Events'
                    errMsg={errors?.description?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="date">Date</label><br />
                <TextInputComponent
                    name="date"
                    control={control}
                    type='date'
                    placeholder="Date of the Events"
                    errMsg={errors?.date?.message}
                    required:true
                />
            </div>           
             <div>
                <label htmlFor="image"> Image {detail && "(Leave empty to keep current image)"}</label><br />
                <input
                    type='file'
                    onChange={handleImageChange}
                /><br />
                {imagePreview && (
                    <div style={{ marginTop: '10px' }}>
                        <img 
                            src={imagePreview} 
                            alt="Preview" 
                            style={{ 
                                maxWidth: '200px', 
                                maxHeight: '150px', 
                                objectFit: 'cover',
                                borderRadius: '4px',
                                border: '1px solid #ddd'
                            }}
                        />
                    </div>
                )}
                {errors?.image?.message && <p style={{ color: 'red' }}>{errors?.image?.message}</p>}
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input className='submit_btn' type="submit" value={value} disabled={loading} style={{cursor:'pointer'}}/>
        </div>
    </form>
  )
}

export default EventsForm