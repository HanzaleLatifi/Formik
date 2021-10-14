import React from 'react'

function CheckBox({ checkBox, formik, name }) {
    return (
        <div>
            {checkBox.map(item => {
                return (
                    <div key={item.value}>
                        <input type="checkbox"
                            id={item.value}
                            name={name}                            
                            onChange={formik.handleChange}
                            value={item.value}
                            checked={formik.values[name].includes(item.value)} />
                        <label htmlFor={item.value}>{item.label}</label>

                    </div>
                )
            })}
            {formik.errors[name] && <div className="error">{formik.errors[name]}</div>}
        </div>
    )
}

export default CheckBox
