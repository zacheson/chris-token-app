import Link from "next/link"

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#ff0700] text-white'>
      <h1 className='text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff0700] to-[#fff]'>
        Token Auto Liquidity
      </h1>
      <p className='max-w-xl text-center mb-8 text-lg text-gray-200'>
        Create your own Tron-based token with self-generating liquidity, swap
        and liquidity management, and seamless Trust Wallet integration.
        Professional, secure, and visible on the blockchain.
      </p>
      <div className='flex flex-col md:flex-row gap-6'>
        <Link
          href='/create-token'
          className='px-8 py-3 rounded-lg font-semibold bg-[#ff0700] hover:bg-[#ff3b1f] shadow-lg transition text-white text-lg'
        >
          Create Token
        </Link>
        <Link
          href='/swap-liquidity'
          className='px-8 py-3 rounded-lg font-semibold bg-[#171717] hover:bg-[#302b63] shadow-lg transition text-white text-lg'
        >
          Swap & Liquidity
        </Link>
        <Link
          href='/connect-wallet'
          className='px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#ff0700] to-[#302b63] hover:from-[#ff3b1f] hover:to-[#171717] shadow-lg transition text-white text-lg'
        >
          Connect Wallet
        </Link>
      </div>
      <footer className='mt-16 text-gray-400 text-sm'>
        Powered by Tron Blockchain & WalletConnect
      </footer>
    </div>
  )
}

export default Home
