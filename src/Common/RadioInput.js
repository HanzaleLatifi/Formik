import React from 'react'

function RadioInput({ radioOptions, formik, name }) {
    return (
        <div style={{display:"flex"}}>
            {radioOptions.map(item =>
                <div key={item.value}>
                    <label htmlFor={item.value} >{item.label}</label>
                    <input type="radio"
                        onChange={formik.handleChange}
                        value={item.value}
                        name={name}
                        id={item.value}
                        checked={formik.values.gender === item.value} />
                </div>
            )}

            {formik.errors[name] && formik.touched[name] && <div className="error">{formik.errors[name]}</div>}
        </div>
    )
}

export default RadioInput
