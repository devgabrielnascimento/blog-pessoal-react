import  { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:no-underline'>Postagens</Link>
              <Link to='/temas' className='hover:no-underline'>Temas</Link>
              <Link to='/cadastroTema' className='hover:no-underline'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:no-underline'><div className='row-span-2'><div className='w-2/3 rounded-full border-stone-300 border-spacing-2 border-2'>
              <img src={usuario?.foto} className='h-12 rounded-full' alt="" />
              </div><p>Meu Perfil</p></div></Link>
              
              
              <Link to='' onClick={logout} className='hover:no-underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar