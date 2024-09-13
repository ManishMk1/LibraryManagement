
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function UserLogin() {
  const [userId, setUserId] = useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
 
  const handleLogin=async()=>{
    axios({
      method: 'post',
      url: 'http://localhost:8080/user/login',
      data: {
       userId:userId,
       password:password
      },
      withCredentials:true
     
    }).then(async(response)=>{
      if(response.status===200){
        localStorage.setItem('token',response.data.user.token);
        console.log(user,"we are here ");
       navigate("/admin/dashboard");
        console.log(response);
      }
    }).catch((error)=>{
      console.log(error);
    })
   
  }
return (
  <div className='w-[100vw] h-[100vh] bg-gray-100 flex justify-center items-center'>
      <div className='w-[400px] h-[500px] bg-gray-300 flex items-center justify-between flex-col'>
          <div className='p-4'>
          <h2 className='mt-10 text-center'>
         Libray Management System
         </h2>
         <h2 className='mt-8'> User Login Page</h2>
         <div>
         <h2 className='mt-5'>Enter User ID</h2>
         <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} />
         </div>
         <div>
          <h2 className='mt-5'> Enter Password</h2>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
         </div>
         <div className='flex items-center justify-center w-full'>
         <button type='submit' className='mt-10 text-center bg-blue-200 w-full' onClick={handleLogin}> Login</button>
         </div>
         
          </div>
         
          
      </div>
  </div>
)
}

export default UserLogin