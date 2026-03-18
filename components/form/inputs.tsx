import { Input } from "../ui/input"
import { Label } from "../ui/label" 
import { cn } from "@/lib/utils"

const Inputfield = ({name , label , type="text" , placeholder , disabled ,value, register, error , validation} : FormInputsProps) => {
  return (
    <div className="space-y-2">
        <Label htmlFor={name} className="Form-label">
            {label}
        </Label>
        <Input 
            type= {type}
            id = {name}
            placeholder = {placeholder}
            disabled = {disabled}
            value = {value}
            className ={cn('form-inputs text-white' , {'opacity-50 cursor-not-allowed': disabled})} 
            {...register(name, validation)}/>
            {error && <p className="text-sm text-red-500">{error.message}</p>}

    </div>
  )
}

export default Inputfield