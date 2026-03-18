"use client"
import FooterLink from "@/components/form/FooterLink"
import Inputfield from "@/components/form/inputs"
import { useForm } from "react-hook-form"

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  })

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1 className="form-title">Log in to Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Inputfield
          name="email"
          label="Email"
          placeholder="user@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          }}
        />
        <Inputfield
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
          }}
        />
        <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
        <FooterLink text="Don't have an account?" linkText="Sign up" href="/sign-up" />
      </form>
    </>
  )
}

export default Signin