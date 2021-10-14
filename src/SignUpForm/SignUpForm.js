import axios from 'axios';
import { useFormik } from 'formik'
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import CheckBox from '../Common/CheckBox';
import Input from '../Common/Input';
import RadioInput from '../Common/RadioInput';
import SelectComponent from '../Common/SelectComponent';


//1 .


const initialValues = {
    name: "", email: "", password: "", passwordConfirm: "", gender: "", nationality: "", intrests:[], terms: false

}
//2. 
const onSubmit = (values) => {
    console.log(values)
    
    axios.post("http://localhost:3001/user",values).then((res)=>console.log(res.data)).catch(err=>console.log(err))
}
// 3 .
const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().required('Email is required').email('email is invalid'),
    password: Yup.string().required('password is Required'),
    passwordConfirm: Yup.string().required("password Confirm is required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
    gender: Yup.string().required("gender Confirm is required"),
    nationality: Yup.string().required("select Nationality"),
    intrests: Yup.array().required("required").min(1),
    terms: Yup.boolean().required().oneOf([true], 'You must accept the terms and conditions.'),

});

//array of obj for map in common compunents
const radioOptions = [
    { label: "Male", value: "1" },
    { label: "female", value: "0" }
]
const selectOptions = [
    { label: "select Country", value: "" },
    { label: "iran", value: "IR" },
    { label: "japan", value: "JP" },
    { label: "qatar", value: "QA" }
]
const checkBox = [
    { label: "React.js", value: "React.js" },
    { label: "Vue.js", value: "Vue.js" }
]

function SignUpForm() {

    const [formValues, setFormValues] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3001/user/1").then((res) => setFormValues(res.data)).catch((err => console.log(err)))

    }, [])

    const formik = useFormik({
        initialValues: formValues || initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true

    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="Form">

                <Input formik={formik} label="Name" name="name" />
                <Input formik={formik} label="Email" name="email" />
                <Input formik={formik} label="Password" name="password" type="password" />
                <Input formik={formik} label="Password Confirm" name="passwordConfirm" type="password" />
                <RadioInput formik={formik} name="gender" radioOptions={radioOptions} />
                <SelectComponent formik={formik} selectOptions={selectOptions} name="nationality" />
                <CheckBox formik={formik} checkBox={checkBox} name="intrests" />
                
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input type="checkbox" name="terms" value={true} onChange={formik.handleChange}  id="1" checked={formik.values.terms}/>
                    <label htmlFor="1">terms and conditions</label>
                    {formik.errors.terms && formik.touched.terms && <div className="error">{formik.errors.terms}</div>}
                </div>


                <button type="submit" disabled={!formik.isValid}>Sign Up</button>
            </form>

        </>
    )
}

export default SignUpForm