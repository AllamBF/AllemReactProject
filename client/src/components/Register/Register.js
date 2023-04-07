import React, { useState } from "react";



const Register =()=>{

    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleLogin =(e)=>{
        e.preventDefault();  
    }


    return(
        <div className="login">
            <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={firstName} className="form-control" onChange={(e)=>setfirstName(e.target.value)} id="firstName" aria-describedby="firstName" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" value={lastName} className="form-control" onChange={(e)=>setlastName(e.target.value)} id="lastName" aria-describedby="lastName" placeholder="Enter your last name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} className="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input type="password" value={confirmPassword} className="form-control" onChange={(e)=>setConfirmPassword(e.target.value)} id="exampleInputPassword2" placeholder="Re Password" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;