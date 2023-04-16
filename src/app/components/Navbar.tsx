import SearchBox from "./SearchBox"
import ScreenSelector from "./ScreenSelector"
import dynamic from "next/dynamic";

const DarkSwitch = dynamic(() => import('./DarkSwitch'), {
  ssr: false,
})

function Navbar() {
  return (
    <div className='flex w-full justify-between'>
      <SearchBox />
      <ScreenSelector />
      <DarkSwitch />
    </div>
  )
}

export default Navbar
