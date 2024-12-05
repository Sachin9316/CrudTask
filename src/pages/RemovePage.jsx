import { useContext } from 'react'
import { contextApp } from '../context/contextApp';

const RemovePage = () => {
  const { email, jsonData } = useContext(contextApp);

  function handleRemoveBtn(e) {
    e.preventDefault()
    const checkEmailId = jsonData.filter((user) => user.email !== email.current.value);
    console.log(checkEmailId);
    console.log("User Removed");
    localStorage.setItem('users', JSON.stringify(checkEmailId));
  }

  return (

    <form className='flex flex-col justify-center items-center min-h-screen' onSubmit={handleRemoveBtn}>
      <div className='bg-white flex w-[300px] flex-col items-center gap-y-3 p-5 rounded-lg mt-4'>
        <h2>Do You Really Want to delete Your Data!</h2>
        <div className='flex flex-col items-center gap-y-3'>
          <input
            type="text"
            ref={email}
            placeholder='Enter email'
            className='p-2 border border-1 border-red-300 rounded-md focus:outline-none focus:border-red-600 focus:border-2'
            required
          />
        </div>

        <div>
          <button className='bg-red-500 p-2 w-[200px] text-white rounded-md'>
            Remove
          </button>
        </div>
      </div>
    </form>
  )
}

export default RemovePage