import React from 'react'
import {useFormik} from 'formik'
const NewForms = () => {

    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validate:(values)=>{
            let errors={};
            if(!values.email){
           errors.email = ' *email is required'
            }
            if(!values.password){
                errors.password=' *password is required'
            }
            return errors
        }
    })
  return (
    <>
    <div>
    <form onSubmit={formik.handleSubmit} >
        <label htmlFor="">email :</label>
        <input type="email" name='email'  id='email' value={formik.values.email} onChange={formik.handleChange}/>
        {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:null}
        <br/>
        <label htmlFor="">password :</label>
        <input type="password" name='password'id='password' value={formik.values.password} onChange={formik.handleChange}/>
        {formik.errors.password ?<div style={{color:"red"}}>{formik.errors.password}</div>:null}

        <br/>
        <button type="submit">submit</button>
        </form>
          </div>
    </>
  )
}

export default NewForms;
