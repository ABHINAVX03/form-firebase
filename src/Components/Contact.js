import React, { useState } from 'react'

const Contact = () => {
    const [user,setuser]=useState({email:"",password:""})
    let name,value;
    const handleonchange=(e)=>{
        name=e.target.name;
        value=e.target.value;

        setuser({...user,[name]:value})
    }
     
    const postData= async (e)=>{
        e.preventDefault();
        const {email,password}=user;
        const res=await fetch("https://form-details-3476f-default-rtdb.firebaseio.com/sample_submission.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });

    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' value={user.email} className="form-control" id="exampleInputEmail1" onChange={handleonchange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' onChange={handleonchange} value={user.password} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact
