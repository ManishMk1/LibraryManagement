
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Signup() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const [role, setRole] = useState("");
  const [userId,setUserId]=useState("");
  const handleChange = (event) => {
    setRole(event.target.value); // Update the selected role based on user's choice
  };
  const handleSignup=()=>{
    axios({
      method: 'post',
      url: 'http://localhost:8080/user/signup',
      data: {
       name:name,
       userId:userId,
       email:email,
       password:password,
       role:role
      }
    }).then((response)=>{
      if(response.status===200){
      return navigate(`/${role}/login`);
      }
    }).catch((error)=>{
      console.log(error);
    })
   console.log("cliecke");
  }
return (
  <div className='w-[100vw] h-[100vh] bg-purple-300 flex justify-center items-center'>
      <div className='w-[400px] h-[500px] bg-gray-400 flex items-center justify-between flex-col'>
          <div className='p-4'>
          <h2 className='mt-5'>
         Welcome to Library Management System
         </h2>
         <div>
         <h2 className='mt-5'>Enter Name</h2>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
         </div>
         <div>
         <h2 className='mt-5'>Enter UserId</h2>
         <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} />
         </div>
         <div>
         <h2 className='mt-5'>Enter Email</h2>
         <input type="email" value={email} onChange={(e)=>setMail(e.target.value)} />
         </div>
         <div>
          <h2 className='mt-5'> Enter Password</h2>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
         </div>
         <label htmlFor=""></label>

         <div>
      <h3>Select your role:</h3>
      <div>
        <input
          type="radio"
          id="user"
          name="role"
          value="User"
          checked={role === "User"}
          onChange={handleChange}
        />
        <label htmlFor="user">User</label>
      </div>

      <div>
        <input
          type="radio"
          id="admin"
          name="role"
          value="Admin"
          checked={role === "Admin"}
          onChange={handleChange}
        />
        <label htmlFor="admin">Admin</label>
      </div>

      <div>
        <p>Selected Role: {role}</p>
      </div>
      <div className='flex items-center justify-center w-full'>
         <button type='submit' className='mt-10 text-center bg-green-200 w-full' onClick={handleSignup}> SignUp</button>
         </div>
    </div>
          </div>
         
          
      </div>
  </div>
)
}

export default Signup