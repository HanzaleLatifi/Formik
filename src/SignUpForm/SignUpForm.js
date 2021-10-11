import {useFormik} from 'formik'
import * as Yup from 'yup';
import { string } from 'yup/lib/locale';


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

   const formik=useFormik({
       initialValues,
       onSubmit ,
       validationSchema,
       validateOnMount:true

   })
    
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