import Link from "next/link"
import { useState } from "react"

const SwapLiquidity = () => {
  const [tab, setTab] = useState<"swap" | "liquidity">("swap")
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#ff0700] text-white'>
      <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff0700] to-[#fff]'>
        Swap & Liquidity
      </h2>
      <div className='flex gap-4 mb-6'>
        <button
          onClick={() => setTab("swap")}
          className={`px-6 py-2 rounded-t-lg font-semibold transition ${
            tab === "swap"
              ? "bg-[#ff0700] text-white"
              : "bg-[#302b63] text-gray-200"
          }`}
        >
          Swap
        </button>
        <button
          onClick={() => setTab("liquidity")}
          className={`px-6 py-2 rounded-t-lg font-semibold transition ${
            tab === "liquidity"
              ? "bg-[#ff0700] text-white"
              : "bg-[#302b63] text-gray-200"
          }`}
        >
          Liquidity
        </button>
      </div>
      <div className='bg-[#171717]/80 p-8 rounded-b-xl shadow-lg w-full max-w-md'>
        {tab === "swap" ? (
          <div>
            <p className='mb-4 text-lg'>
              Swap your Tron token with TRX or other tokens.
            </p>
            <div className='h-32 flex items-center justify-center text-gray-400'>
              [Swap UI Coming Soon]
            </div>
          </div>
        ) : (
          <div>
            <p className='mb-4 text-lg'>
              Manage your liquidity pools and view stats.
            </p>
            <div className='h-32 flex items-center justify-center text-gray-400'>
              [Liquidity UI Coming Soon]
            </div>
          </div>
        )}
      </div>
      <Link href='/' className='mt-8 text-[#ff0700] hover:underline'>
        &larr; Back to Home
      </Link>
    </div>
  )
}

export default SwapLiquidity
