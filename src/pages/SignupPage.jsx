import { useContext } from 'react';
import { contextApp } from '../context/contextApp'

const SignupPage = () => {
  const { formData, handleClick, handleInputSignup } = useContext(contextApp);

  return (
    <form className='flex flex-col justify-center items-center  min-h-screen' onSubmit={(e) => handleClick(e)}>
      <div className='bg-white flex w-[300px] flex-col items-center gap-y-3 p-5 rounded-lg'>
        <h2>Signup</h2>
        <div className='flex flex-col items-center gap-y-3'>
          <input
            type="text"
            name='username'
            value={formData.username}
            placeholder='Username'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            onChange={(e) => handleInputSignup(e)}
            required
          />
          <input
            type="email"
            name='email'
            value={formData.email}
            placeholder='Email'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            onChange={(e) => handleInputSignup(e)}
            required
          />
          <input
            type="password"
            name='createPassword'
            value={formData.createPassword}
            placeholder='Create password'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            onChange={(e) => handleInputSignup(e)}
            required
          />
          <input
            type="password"
            name='confirmPassword'
            value={formData.confirmPassword}
            placeholder='Confirm password'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            onChange={(e) => handleInputSignup(e)}
            required
          />
        </div>

        <div >
          <button className='bg-indigo-500 p-2 w-[200px] text-white rounded-md' >Signup
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupPage;
