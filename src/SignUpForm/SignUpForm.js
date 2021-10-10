import {useFormik} from 'formik'
//1 .
const initialValues={
    name:"" , email:"" , password:""

}
//2. 
const onSubmit=(values)=>{
    console.log(values) 
}
// 3 .
const validate=(values)=>{
    const errors={} 
    if(!values.name){
        errors.name="Name is Required"
    }
    if(!values.email){
        errors.email="Email is required"
    }
    if(!values.password){
        errors.password="Password is required"
    }

    return errors;

}

function SignUpForm() {

   const formik=useFormik({
       initialValues,
       onSubmit ,
       validate ,

   })
   console.log(formik.touched)
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="Form">
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Name</label>
                    <input type="text" value={formik.values.name} onBlur={formik.handleBlur} name="name" onChange={formik.handleChange}></input>
                    {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Email</label>
                    <input type="text" value={formik.values.email} onBlur={formik.handleBlur} name="email" onChange={formik.handleChange}></input>
                    {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}

                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Password</label>
                    <input type="text" value={formik.values.password} onBlur={formik.handleBlur} name="password" onChange={formik.handleChange}></input>
                    {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}

                </div>
                <button type="submit">Sign Up</button>
            </form>

        </>
    )
}

    export default SignUpForm