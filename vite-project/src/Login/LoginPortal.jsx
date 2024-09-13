import { Link, useNavigate } from "react-router-dom"

function LoginPortal() {
    const navigate=useNavigate();
    const handleAdmin=()=>{
       navigate('/admin/login');
    }
    const handleUser=()=>{
        navigate('/user/login');
     }
     const handleSignUp=()=>{
      navigate('/signup')
     }
  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-slate-200'>
        <div className='h-[400px] w-[400px] flex-col justify-center'>
            <div className='bg-blue-50 flex justify-center flex-col'>
              <h1 className='text-center mt-10 p-2'> Welcome to Library System</h1>

            </div>
            <div className='bg-gray-100 flex flex-col h-full justify-center items-center'>
                <div className='flex flex-col gap-5 w-50 items-center'>
                <button className=' bg-blue-400  rounded-full p-2' onClick={handleAdmin}> Admin Login</button>
                <button className=' bg-blue-400  rounded-full p-2' onClick={handleUser}>User Login</button>
                </div>
                <button className=' bg-blue-400  rounded-full p-2 mt-5' onClick={handleSignUp}>New User or Admin? Click Here</button>
               
            </div>
        </div>

    </div>
  )
}

export default LoginPortal