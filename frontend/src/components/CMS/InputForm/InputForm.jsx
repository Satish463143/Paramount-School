import { useController } from "react-hook-form";
import Select from 'react-select'

export const TextInputComponent = ({type="text",control,name, defaultValue="",required=false, errMsg= null,placeholder="",className="",style={}})=>{
    const {field} = useController({
        control:control,
        name:name,
        defaultValue:defaultValue,
        // rules:{
        //     required:required
        // }
    })
    return (
        <>
            <input
                type={type}
                {...field} 
                placeholder={placeholder}
                className={className}
                style={style}
            /> <br />
            <span style={{color:'red', fontStyle:'italic'}}>
                {errMsg}
            </span>
        </>
    )
}

export const SelectComponent = ({options,control,name,defaultValue,errMsg})=>{
    const {field} = useController({
        control:control,
        name:name,
        defaultValue:defaultValue,
        // rules:{
        //     required:required
        // }
    })

    return (
        <>
            <Select options={options} {...field} isClearable menuPlacement='top'/>
            <span style={{color:'red', fontStyle:'italic'}}>
                {errMsg}
            </span>
        </>
    )
}
export const StatusComponent = ({control,name,errMsg,required})=>{
    return(
        <>
            <SelectComponent 
                options ={
                    [{label:"Active", value:"active"},{label:"Inactive", value:"inactive"}]
                }
                control={control}
                name={name}
                errMsg={errMsg}
                required={required}
            />
        </>
    )
}