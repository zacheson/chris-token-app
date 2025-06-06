import Link from "next/link"

const CreateToken = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#ff0700] text-white'>
      <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff0700] to-[#fff]'>
        Create Tron Token
      </h2>
      <form className='bg-[#171717]/80 p-8 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-md'>
        <label className='flex flex-col gap-1'>
          <span className='font-semibold'>Token Name</span>
          <input
            type='text'
            className='px-4 py-2 rounded bg-[#302b63] text-white focus:outline-none'
            placeholder='e.g. TronX'
          />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-semibold'>Symbol</span>
          <input
            type='text'
            className='px-4 py-2 rounded bg-[#302b63] text-white focus:outline-none'
            placeholder='e.g. TRX'
          />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-semibold'>Total Supply</span>
          <input
            type='number'
            className='px-4 py-2 rounded bg-[#302b63] text-white focus:outline-none'
            placeholder='e.g. 1000000'
          />
        </label>
        <label className='flex flex-col gap-1'>
          <span className='font-semibold'>Decimals</span>
          <input
            type='number'
            className='px-4 py-2 rounded bg-[#302b63] text-white focus:outline-none'
            placeholder='e.g. 6'
          />
        </label>
        <button
          type='button'
          className='mt-4 px-6 py-2 rounded-lg bg-[#ff0700] hover:bg-[#ff3b1f] font-bold text-lg transition'
        >
          Deploy Token (Coming Soon)
        </button>
      </form>
      <Link href='/' className='mt-8 text-[#ff0700] hover:underline'>
        &larr; Back to Home
      </Link>
    </div>
  )
}

export default CreateToken
