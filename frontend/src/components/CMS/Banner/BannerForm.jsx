import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextInputComponent, StatusComponent } from '../InputForm/InputForm'

const BannerForm = ({submitEvent,loading,detail=null}) => {
    const bannerDTO = Yup.object({
        headline: Yup.string().min(3).max(50).required(),
        primaryCta: Yup.string().min(3).max(50).required(),
        primaryCtaLink: Yup.string().min(3).max(50).required(),
        secondaryCta: Yup.string().min(3).max(50).nullable().optional().default(null),
        secondaryCtaLink: Yup.string().min(3).max(50).nullable().optional().default(null),
        subheadline: Yup.string().min(3).max(50).nullable().optional().default(null),
        status: Yup.object({
            label: Yup.string().matches(/^(Active|Inactive)$/),
            value: Yup.string().matches(/^(active|inactive)$/).required()
        }).required(),
        image: Yup.mixed().required("Image is required"),
    });
     
    const { control, handleSubmit, setValue,  formState: { errors } } = useForm({
        resolver: yupResolver(bannerDTO)
    })

    useEffect(()=>{
        if(detail){
            setValue("headline", detail.headline)
            setValue("subheadline", detail.subheadline)
            setValue("status", detail.status)
            setValue("image", detail.image)
            setValue("primaryCta", detail.primaryCta)
            setValue("primaryCtaLink", detail.primaryCtaLink)
            setValue("secondaryCta", detail.secondaryCta)
            setValue("secondaryCtaLink", detail.secondaryCtaLink)

        }
    },[detail, setValue])
  return (
    <form onSubmit={handleSubmit(submitEvent)}>
        <h3>Content</h3>
        <div className="from_grid">
            <div>
                <label htmlFor="headline">Title</label><br />
                <TextInputComponent
                    name="headline"
                    control={control}
                    type='text'
                    defaultValue=''
                    errMsg={errors?.headline?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="subheadline">Sub Title</label><br />
                <TextInputComponent
                    name="subheadline"
                    control={control}
                    errMsg={errors?.subheadline?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="primaryCta">Button 1</label><br />
                <TextInputComponent
                    name="primaryCta"
                    control={control}
                    type='text'
                    placeholder="Explore Programs"
                    errMsg={errors?.primaryCta?.message}
                    required:true
                />
            </div>
            <div>
                <label htmlFor="primaryCtaLink">Button 1 Link</label><br />
                <TextInputComponent
                    name="primaryCtaLink"
                    control={control}
                    type='text'
                    placeholder='https://example.com'
                    errMsg={errors?.primaryCtaLink?.message}
                    required:true
                />
            </div>            
            <div>
                <label htmlFor="secondaryCta">Button 2</label><br />
                <TextInputComponent
                    name="secondaryCta"
                    control={control}
                    type='text'
                    placeholder='Visit School'
                    errMsg={errors?.secondaryCta?.message}
                />
            </div>
            <div>
                <label htmlFor="secondaryCtaLink">Button 2 Link</label><br />
                <TextInputComponent
                    name="secondaryCtaLink"
                    control={control}
                    type='text'
                    placeholder='https://example.com'
                    errMsg={errors?.secondaryCtaLink?.message}
                />
            </div>            
            <div>
                <label htmlFor="status">Status</label><br />
                <StatusComponent
                    name="status"
                    control={control}
                    errMsg={errors?.status?.message}
                    required:true
                />
            </div>            
             <div>
                <label htmlFor="image"> Image</label><br />
                <input
                    type='file'
                    onChange={(e) => {
                        const image = e.target.files['0']
                        setValue('image', image)
                    }}
                /><br />
                {errors?.image?.message && <p style={{ color: 'red' }}>{errors?.image?.message}</p>}
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input className='submit_btn' type="submit" value="Update Banner" disabled={loading} />
        </div>
    </form>
  )
}

export default BannerForm