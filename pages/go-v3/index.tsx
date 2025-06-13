import Image from 'next/image'

import { Header } from '@/components/go-v3/Header'

export default function GoV3Page() {
  return (
    <div className=''>
      {/* Header */}
      <Header />

      {/* Body */}
      <form className='w-full items-center justify-center mx-auto mt-20'>
        <Image
          src='/google.png'
          alt='googleImage'
          width={280}
          height={100}
          priority
          className='mx-auto object-contain'
        />

        <div className='flex w-full mt-5 mx-auto max-w-[80%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-lg lg:max-w-xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5 mr-3'
          >
            <path
              fill-rule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
              clip-rule='evenodd'
            />
          </svg>

          <input className='flex-grow focus:outline-none' type='text' />

          <div className='space-x-4 hidden md:inline-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-5 cursor-pointer text-gray-600'
            >
              <path d='M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z' />
              <path d='M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z' />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-5 cursor-pointer text-gray-600'
            >
              <path
                fill-rule='evenodd'
                d='M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z'
                clip-rule='evenodd'
              />
            </svg>
          </div>
        </div>

        <div className='flex items-center justify-center my-7 gap-x-4 text-sm'>
          <button
            className='bg-gray-100 text-black px-4 py-2 rounded-md'
            onClick={() => {}}
          >
            Google Search
          </button>

          <button
            className='bg-gray-100 text-black px-4 py-2 rounded-md'
            onClick={() => {}}
          >
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className=''></div>
    </div>
  )
}
