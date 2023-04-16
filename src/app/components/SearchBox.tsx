import { BsSearch } from 'react-icons/bs'

function SearchBox() {
  return (
    <div className='flex w-[700px]'>
      <div className='w-6/12 h-10'>
        <input 
          className='w-full h-10 dark:bg-[#3d3d3f] focus:dark:bg-[#121212] focus:outline-none focus:dark:border-blue-600 dark:text-white p-2 rounded-tl-lg border dark:border-slate-700 duration-300' />
      </div>
      <div className='flex w-10 justify-center dark:bg-[#2a2a2d] rounded-tr-lg rounded-br-lg border dark:border-slate-700 p-2'>
        <button type='button' className='items-center'>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default SearchBox
