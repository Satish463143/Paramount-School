import React, { useEffect, useState} from 'react'
import * as Yup from 'yup'
import { useForm ,Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent, } from '../InputForm/InputForm'
import Select from 'react-select'
import { useListAllQuery } from '@/api/galleryCategory.api'

const GalleryForm = ({submitEvent,loading,value,detail=null}) => {
    const [imagePreview, setImagePreview] = useState(null);
    
    // Gallery Category List
    const {data, isLoading, error } = useListAllQuery()
    const categoryList = data?.result
    
    const galleryDTO = Yup.object({
        title: Yup.string().min(3).max(50).required(),
        category: Yup.array().min(1).required(),
        image: Yup.mixed().required("Image is required"),
    });
     
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(galleryDTO)
    })

    useEffect(()=>{
        if(detail){
            setValue("title", detail.title)
            setValue("category", detail.category)
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
        <h3>Gallery Details</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="name">Title</label><br />
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
                <label htmlFor="category">Category</label>
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                    <Select
                        {...field}
                        options={categoryList? categoryList.map((category) => ({
                        value: category._id,
                        label: category.title,
                        })) 
                        : []
                    }

                        isMulti
                        placeholder="Select Category"
                    />
                    )}
                />
                {errors?.category && (
                    <span style={{ color: "red", fontStyle: "italic" }}>
                    {errors.category.message}
                    </span>
                )}
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

export default GalleryForm