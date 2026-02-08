import {NavLink} from 'react-router'


const NavbarAdmin = () => {

  return (
    <nav className='flex flex-col justify-between w-1/5 h-screen min-h-screen p-6 text-black bg-blue-900'>

        <div>
            <div className='mb-6'>
               <a className='text-xl font-bold'>project A/S</a> 
            </div>

            <menu className='space-y-4'>

              <li className='hover hover:text-blue-800'>
                <NavLink to="/">forsiden</NavLink>
              </li>

              <li className='hover hover:text-blue-800'>
                <NavLink to="/admin" end>ADMIN dashboard</NavLink>
              </li>

              <li className='hover hover:text-blue-800'>
                <NavLink to="/admin/admingame">slet/ret (ADMIN)</NavLink>
              </li>

              <li className='hover hover:text-blue-800'>
                <NavLink to="/admin/creategame">opret nyt citat</NavLink>
              </li>


            </menu>
        </div>

    </nav>
  )
}

export default NavbarAdmin

