import Link from "next/link"

const ConnectWallet = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#ff0700] text-white'>
      <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff0700] to-[#fff]'>
        Connect Wallet
      </h2>
      <div className='bg-[#171717]/80 p-8 rounded-xl shadow-lg flex flex-col items-center gap-6 w-full max-w-md'>
        <button className='px-8 py-3 rounded-lg bg-gradient-to-r from-[#ff0700] to-[#302b63] hover:from-[#ff3b1f] hover:to-[#171717] font-bold text-lg transition shadow-lg'>
          Connect with WalletConnect (Coming Soon)
        </button>
        <p className='text-gray-400 text-center'>
          Supports Trust Wallet and other WalletConnect compatible wallets.
        </p>
      </div>
      <Link href='/' className='mt-8 text-[#ff0700] hover:underline'>
        &larr; Back to Home
      </Link>
    </div>
  )
}

export default ConnectWallet
