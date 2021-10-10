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
   console.log(formik.errors)
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="Form">
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