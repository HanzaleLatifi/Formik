import { useState } from 'react'

function SignUpForm() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const changeHandler=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={submitHandler} className="Form">
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Name</label>
                    <input type="text" value={userData.name} name="name" onChange={changeHandler}></input>
                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Email</label>
                    <input type="text" value={userData.email} name="email" onChange={changeHandler}></input>
                </div> 
                <div style={{display:"flex" , flexDirection:"column"}}>
                    <label>Password</label>
                    <input type="text" value={userData.password} name="password" onChange={changeHandler}></input>
                </div>
                <button type="submit">Sign Up</button>
            </form>

        </>
    )
}

    export default SignUpForm