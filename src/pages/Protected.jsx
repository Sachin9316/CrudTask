import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { contextApp } from '../context/contextApp';

const Protected = () => {

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Protected