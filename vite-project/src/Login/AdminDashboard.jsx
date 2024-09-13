import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function AdminDashboard() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
       return  navigate("/");
    }
  return (
    <div className='w-full h-screen bg-slate-300 flex justify-center items-center'>
         <button className='absolute top-2 right-2 border-gray-800 border-2 rounded' onClick={handleLogout}>Logout</button>
        <div className='w-[400px] h-[400px] bg-gray-100 flex justify-center items-center flex-col'>
            <h2>Hi, Admin</h2>
            <div className='flex flex-col justify-center items-center gap-4 w-[200px]'>
            <Link to={"/membership"} className='bg-slate-400 p-2 rounded-xl w-full text-center '>Add Membership</Link>
        <Link to={"/membership"} className='bg-slate-400 p-2 rounded-xl w-full text-center'>Update MemberShip</Link>
        <Link to={"/membership"} className='bg-slate-400 p-2 rounded-xl w-full text-center'>Add Book/Movie</Link>
        <Link to={"/membership"} className='bg-slate-400 p-2 rounded-xl w-full text-center'>Update Book/Movie</Link>
        <Link to={"/membership"} className='bg-slate-400 p-2 rounded-xl w-full text-center'>Add User</Link>
        <Link to={"/membership"} className='bg-slate-400 p-2 rounded-xl w-full text-center'>Update User</Link>

            </div>
       
        <div>

        </div>
        </div>

    </div>
  )
}

export default AdminDashboard