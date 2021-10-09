import { useState } from 'react'
import {useFormik} from 'formik'

function SignUpForm() {

   const formik=useFormik({
       initialValues:{
           name:"" , email:"" , password:""
       }
   })
   console.log(formik.values)
    const submitHandler=(e)=>{
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={submitHandler} className="Form">
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Name</label>
                    <input type="text" value={formik.values.name} name="name" onChange={formik.handleChange}></input>
                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Email</label>
                    <input type="text" value={formik.values.email} name="email" onChange={formik.handleChange}></input>
                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Password</label>
                    <input type="text" value={formik.values.password} name="password" onChange={formik.handleChange}></input>
                </div>
                <button type="submit">Sign Up</button>
            </form>

        </>
    )
}

    export default SignUpForm