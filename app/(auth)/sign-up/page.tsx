"use client"
import Countryselect, { CountrySelectField } from "@/components/form/Countryselect"
import FooterLink from "@/components/form/FooterLink"
import Inputfield from "@/components/form/inputs"
import SelectedInputs from "@/components/form/selected"
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants"
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState : {errors , isSubmitting} , 
  } = useForm({
    defaultValues : {
      fullName : "",
      email : "",
      password : "",
      country : "US",
      investmentGoals : "Growth",
      riskTolerance : "Medium",
      preferredIndustry : "Technology"
    }
     ,mode: 'onBlur'
    }
)

  const onSubmit = async(data : SignUpFormData) => {
    try{
      console.log(data)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <>
      <h1 className="form-title">Sign-up & Personalize</h1>
      <form onSubmit ={handleSubmit(onSubmit)} className="space-y-5">
       <Inputfield 
          name='fullName'
          label= 'Full Name'
          placeholder= 'Joe Doe'
          register= {register}
          error= {errors.fullName}
          validation= {{required: 'Fullname is required' , minLength:2}}

       />
       <Inputfield 
          name='email'
          label= 'Email'
          placeholder= 'User@gmail.com'
          register= {register}
          error= {errors.email}
          validation={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            }}

       />
       <Inputfield 
          name='password'
          label= 'Password'
          placeholder= 'Enter a strong password'
          type='password'
          register= {register}
          error= {errors.password}
          validation= {{required: 'Password is required' , minLength:8}}

       />
       <CountrySelectField
          name = "country"
          label="Country"
          control={control}
          error={errors.country}
          required
          /> 
       <SelectedInputs
            name="investmentGoals"
            label= "Investment Goals"
            placeholder= "Select your investment goal"
            options={INVESTMENT_GOALS}
            control= {control}
            error = {errors.investmentGoals}
            required
       />
       <SelectedInputs
            name="riskTolerance"
            label= "Risk Tolerance"
            placeholder= "Select your risk level"
            options={RISK_TOLERANCE_OPTIONS}
            control= {control}
            error = {errors.riskTolerance}
            required
       />
       <SelectedInputs
            name="preferredIndustry"
            label= "Prefered Industry"
            placeholder= "Select your prefered industry"
            options={PREFERRED_INDUSTRIES}
            control= {control}
            error = {errors.preferredIndustry}
            required
       />
      <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
        {isSubmitting ? "create an account" : "Start your investing journey"}
      </button>
      <FooterLink text="Already have an account" linkText = "Sign-in" href="/sign-in"/>
     </form>
    </>
  )
}

export default Signup