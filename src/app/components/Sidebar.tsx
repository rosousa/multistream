import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../context/ContextProvider'

function Sidebar() {
  const {setActiveMenu, activeMenu, screenSize} = useStateContext()

  const NavButton = ({ title, customFunc, icon, color }: any) => (
    <button 
      type={title} 
      onClick={customFunc} 
      style={{color}}
      className='relative text-xl rounded-full p-3 hover:bg-gray-500'
    >
      <span className='absolute inline-flex rounded-full h-2 right-2 top-2' />
      {icon}
    </button>
  )

  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      <div className='flex mt-3 justify-end items-center'>
        Your Favorite
        <NavButton 
          title='menu' 
          customFunc={() => setActiveMenu((preActiveMenu: boolean) => !preActiveMenu)}
          color=''
          icon={<AiOutlineMenu />}
        />
      </div>
    </div>
  )
}

export default Sidebar
