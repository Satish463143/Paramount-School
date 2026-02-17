import React, { useEffect, useState} from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent, } from '../InputForm/InputForm'

const TestimonalForm = ({submitEvent,loading,value,detail=null}) => {
    const [imagePreview, setImagePreview] = useState(null);
    const testimonalDTO = Yup.object({
        author: Yup.string().min(3).max(50).required(),
        role: Yup.string().min(3).max(50).required(),
        message: Yup.string().min(3).max(500).required(),
        avatar: Yup.mixed().required("Image is required"),
    });
     
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(testimonalDTO)
    })

    useEffect(()=>{
        if(detail){
            setValue("author", detail.author)
            setValue("role", detail.role)
            setValue("message", detail.message)
            setValue("avatar", detail.avatar)

            setImagePreview(detail.avatar)
        }
    },[detail, setValue])
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValue('avatar', file);
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
        <h3>Testimonal Details</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Name</label><br />
                <TextInputComponent
                    name="author"
                    control={control}
                    type='text'
                    placeholder='Name of the Parents'
                    errMsg={errors?.author?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="role">Role</label><br />
                <TextInputComponent
                    name="role"
                    control={control}
                    placeholder='Parents of grade 5 student'
                    errMsg={errors?.role?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="message">Message</label><br />
                <TextInputComponent
                    name="message"
                    control={control}
                    type='text'
                    placeholder="Message of Parents"
                    errMsg={errors?.message?.message}
                    required:true
                />
            </div>           
             <div>
                <label htmlFor="avatar"> Image {detail && "(Leave empty to keep current image)"}</label><br />
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
                {errors?.avatar?.message && <p style={{ color: 'red' }}>{errors?.avatar?.message}</p>}
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input className='submit_btn' type="submit" value={value} disabled={loading} style={{cursor:'pointer'}}/>
        </div>
    </form>
  )
}

export default TestimonalForm