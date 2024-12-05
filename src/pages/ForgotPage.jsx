// import React from 'react'

import { useContext } from "react";
import { contextApp } from "../context/contextApp";

const ForgotPage = () => {
  const { email, pass, handleUpdateBtn, navigate } = useContext(contextApp);

  return (
    <form className='flex flex-col justify-center items-center min-h-screen' onSubmit={handleUpdateBtn}>
      <div className='bg-white flex w-[300px] flex-col items-center gap-y-3 p-5 rounded-lg mt-4'>
        <h2>forgot password</h2>
        <div className='flex flex-col items-center gap-y-3'>
          <input
            type="text"
            ref={email}
            placeholder='Enter email'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            required
          />
          <input
            type="password"
            ref={pass}
            placeholder='Enter New password'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            required
          />
        </div>
        <div><span className="text-purple-500 cursor-pointer" onClick={() => navigate('/remove')}>Remove User Data</span></div>

        <div>
          <button className='bg-indigo-500 p-2 w-[200px] text-white rounded-md'>
            Update
          </button>
        </div>
      </div>
    </form>
  );
}

export default ForgotPage