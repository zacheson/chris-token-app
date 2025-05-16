import { useAppDispatch, useAppSelector } from "@/store"
import { toggleTheme } from "@/store/theme/themeConfigSlice"

const Home = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.themeConfig.mode)
  const handleClick = () => {
    console.log("Theme Buttion Clicked")
    dispatch(toggleTheme())
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl'>Hello World!</h1>

      <p className='text-green-800'>{themeMode}</p>
      <button
        onClick={handleClick}
        className={`
          px-4 py-2
          rounded
          border border-gray-400
          cursor-pointer
          transition
        ${
          themeMode === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
        }
      `}
      >
        Switch to {themeMode === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  )
}

export default Home
