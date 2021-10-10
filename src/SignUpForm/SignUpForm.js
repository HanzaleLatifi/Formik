import {useFormik} from 'formik'
import * as Yup from 'yup';


//1 .
const initialValues={
    name:"" , email:"" , password:"" , passwordConfirm:""

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
    passwordConfirm:Yup.string().required("password Confirm is required").oneOf([Yup.ref('password'), null], 'Passwords must match')

});

function SignUpForm() {

   const formik=useFormik({
       initialValues,
       onSubmit ,
       validationSchema,

   })
   console.log(formik.touched)
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="Form">
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Name</label>
                    <input type="text"  name="name" {...formik.getFieldProps("name")} ></input>
                    {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Email</label>
                    <input type="text"  name="email" {...formik.getFieldProps("email")} ></input>
                    {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}

                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Password</label>
                    <input type="text"  name="password" {...formik.getFieldProps("password")} ></input>
                    {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
                </div>
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Password Confirm</label>
                    <input type="text"  name="passwordConfirm" {...formik.getFieldProps("passwordConfirm")} ></input>
                    {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <div className="error">{formik.errors.passwordConfirm}</div>}
                </div>
                <button type="submit">Sign Up</button>
            </form>

        </>
    )
}

    export default SignUpForm