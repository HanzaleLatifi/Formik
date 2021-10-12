import React from 'react'

function Input({formik , name , label , type="text"}) {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label>{label}</label>
                <input type={type} name={name} {...formik.getFieldProps(name)} ></input>
                {formik.errors[name] && formik.touched[name] && <div className="error">{formik.errors[name]}</div>}
            </div>

        </>
    )
}

export default Input
