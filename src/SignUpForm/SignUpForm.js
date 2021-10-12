import axios from 'axios';
import {useFormik} from 'formik'
import { useState , useEffect } from 'react';
import * as Yup from 'yup';
import Input from '../Common/Input';


//1 .


const initialValues={
    name:"" , email:"" , password:"" , passwordConfirm:"" , gender:""

}
//2. 
const onSubmit=(values)=>{
    console.log(values) 
}
// 3 .
const validationSchema=Yup.object({
    name:Yup.string().required('Name is Required') ,
    email:Yup.string().required('Email is required').email('email is invalid') ,
    password:Yup.string().required('password is Required') ,
    passwordConfirm:Yup.string().required("password Confirm is required").oneOf([Yup.ref('password'), null], 'Passwords must match') ,
    gender:Yup.string().required("gender Confirm is required")
});

function SignUpForm() {

    const [formValues, setFormValues] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3001/user/1").then((res)=>setFormValues(res.data)).catch((err=>console.log(err)))
       
    }, [])

   const formik=useFormik({
       initialValues:formValues || initialValues ,
       onSubmit ,
       validationSchema,
       validateOnMount:true ,
       enableReinitialize:true

   })
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="Form">
                
                <Input formik={formik} label="Name" name="name" />
                <Input formik={formik} label="Email" name="email" />
                <Input formik={formik} label="Password" name="password" type="password"  />
                <Input formik={formik} label="Password Confirm" name="passwordConfirm" type="password" />
                 
                <div>
                    <label htmlFor="1" >Male</label>
                    <input type="radio" onChange={formik.handleChange} value="1" name="gender" id="1" checked={formik.values.gender==="1"} />
                    <label htmlFor="0" >Female</label>
                    <input type="radio" onChange={formik.handleChange} value="0" name="gender" id="0" checked={formik.values.gender==="0"} />
                    {formik.errors.gender && formik.touched.gender && <div className="error">{formik.errors.gender}</div>}

                </div>
                <button type="submit" disabled={!formik.isValid}>Sign Up</button>
            </form>

        </>
    )
}

    export default SignUpForm