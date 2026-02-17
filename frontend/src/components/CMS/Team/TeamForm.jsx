import React, { useEffect, useState} from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent, } from '../InputForm/InputForm'

const TeamForm = ({submitEvent,loading,value,detail=null}) => {
    const [imagePreview, setImagePreview] = useState(null);
    const teamDTO = Yup.object({
        name: Yup.string().min(3).max(50).required(),
        role: Yup.string().min(3).max(50).required(),
        qualification: Yup.string().min(3).max(50).required(),
        image: Yup.mixed().required("Image is required"),
    });
     
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(teamDTO)
    })

    useEffect(()=>{
        if(detail){
            setValue("name", detail.name)
            setValue("role", detail.role)
            setValue("qualification", detail.qualification)
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
        <h3>Team Details</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Name</label><br />
                <TextInputComponent
                    name="name"
                    control={control}
                    type='text'
                    placeholder='Mr. James Wilson'
                    errMsg={errors?.name?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="role">Role</label><br />
                <TextInputComponent
                    name="role"
                    control={control}
                    placeholder='Principal & Mathematics Teacher'
                    errMsg={errors?.role?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="qualification">Qualification</label><br />
                <TextInputComponent
                    name="qualification"
                    control={control}
                    type='text'
                    placeholder="PhD in Education, 15+ years experience"
                    errMsg={errors?.qualification?.message}
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

export default TeamForm