import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const MainLayout = () => {
  return (
    <div className='w-[100%] '>
        <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

