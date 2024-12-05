import { useContext } from "react";
import { contextApp } from "../context/contextApp";

const LoginPage = () => {
  const { validData, error, handleInputLogin, handleValidation, navigate } = useContext(contextApp);

  return (
    <form className='flex flex-col justify-center items-center min-h-screen' onSubmit={handleValidation}>
      <div className='bg-white flex w-[300px] flex-col items-center gap-y-3 p-5 rounded-lg mt-4'>
        <h2>Login</h2>
        <div className='flex flex-col items-center gap-y-3'>
          <input
            type="text"
            name='email'
            value={validData.email}
            placeholder='Username/email'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            onChange={handleInputLogin}
            required
          />
          {error && <div className="text-red-600 text-sm">{error.email}</div>}
          <input
            type="password"
            name='password'
            value={validData.password}
            placeholder='password'
            className='p-2 border border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            onChange={handleInputLogin}
            required
          />
        </div>
        <div><span className="text-purple-500 cursor-pointer" onClick={() => navigate('/forgot')}>forgot Password</span></div>
        {error && <div className="text-red-600 text-sm">{error.pass}</div>}

        <div>
          <button className='bg-indigo-500 p-2 w-[200px] text-white rounded-md'>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
