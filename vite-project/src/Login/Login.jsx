
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Login() {
  const [email, setMail] = useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
 
  const handleLogin=async()=>{
    axios({
      method: 'post',
      url: 'http://localhost:8080/user/login',
      data: {
       email:email,
       password:password
      },
      withCredentials:true
     
    }).then(async(response)=>{
      if(response.status===200){
       
        console.log(response);
      }
    }).catch((error)=>{
      console.log(error);
    })
   
  }
return (
  <div className='w-[100vw] h-[100vh] bg-purple-300 flex justify-center items-center'>
      <div className='w-[400px] h-[500px] bg-yellow-400 flex items-center justify-between flex-col'>
          <div className='p-4'>
          <h2 className='mt-10'>
         Welcome to the Notepad
         </h2>
         <div>
         <h2 className='mt-5'>Enter Email</h2>
         <input type="email" value={email} onChange={(e)=>setMail(e.target.value)} />
         </div>
         <div>
          <h2 className='mt-5'> Enter Password</h2>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
         </div>
         <div className='flex items-center justify-center w-full'>
         <button type='submit' className='mt-10 text-center bg-green-200 w-full' onClick={handleLogin}> Login</button>
         </div>
         
          </div>
         
          
      </div>
  </div>
)
}

export default Login