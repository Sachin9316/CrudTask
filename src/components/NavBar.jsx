import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contextApp } from '../context/contextApp'
import { FiUser } from "react-icons/fi";

const NavBar = () => {
  // const navigate = useNavigate()
  const { flag, navigate } = useContext(contextApp)

  const handleHomeClick = () => {
    if (!flag) {
      navigate('/login')
    }
  }
  console.log(flag);
  return (
    <div className='flex justify-between px-4 p-4 text-white flex-wrap items-center fixed w-full backdrop-blur-lg backdrop-brightness-50 bg-transparent'>
      <div>
        <h1 className='cursor-pointer text-xl border p-2' onClick={handleHomeClick}>Home Page</h1>
      </div>
      <div>
        <nav>
          <div >
            <ul className='flex gap-x-3 flex-wrap'>
              <NavLink to="/"><li className='cursor-pointer'>Home</li></NavLink>
              <NavLink to="/about"><li className='cursor-pointer'>About</li></NavLink>
              <NavLink to="/contact"><li className='cursor-pointer'>ContactUs</li></NavLink>
              <NavLink to="/testimonial"><li className='cursor-pointer'>Testimonials</li></NavLink>
              {/* <NavLink to="/login"><li className='cursor-pointer' onClick={() => setFlag(flag === false)}>Logout</li></NavLink> */}
              {
                !flag ? (<ul className='flex gap-x-3 flex-wrap'>
                  <NavLink to="/login"><li className='cursor-pointer'>Login</li></NavLink>
                  <NavLink to="/register"><li className='cursor-pointer'>Signup</li></NavLink>
                </ul>) : (<p className='text-center flex items-center text-xl cursor-pointer border rounded-full p-1'>< FiUser /> </p>)
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar