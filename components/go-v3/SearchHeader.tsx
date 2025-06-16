'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import { User } from './User'

interface SearchHeaderProps {}

export function SearchHeader({}: SearchHeaderProps) {
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='flex items-center p-6 jubstify-between'>
      <Image
        src='/google.png'
        alt='googleImage'
        onClick={() => {
          router.push('/go-v3')
        }}
        width={120}
        height={40}
        priority
        className='cursor-pointer'
      />

      <form className='flex flex-grow items-center border border-gray-300 rounded-full shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5'>
        <input
          defaultValue={router.query.term}
          ref={searchInputRef}
          className='w-full focus:outline-none'
          type='text'
        />

        <div className='gap-x-2 flex'>
          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-6 w-6 text-gray-400 '
          >
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
          </svg>

          <svg
            className='h-6 w-6 text-gray-400 hidden md:inline-flex'
            focusable='false'
            viewBox='0 -960 960 960'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='var(--bbQxAb)'
              d='M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z'
            ></path>
          </svg>

          <svg
            focusable='false'
            viewBox='0 -960 960 960'
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-400 hidden md:inline-flex'
          >
            <path
              fill='var(--bbQxAb)'
              d='M480-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 160q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160Zm-440 40q-66 0-113-47t-47-113v-80h80v80q0 33 23.5 56.5T280-200h200v80H280Zm480-320v-160q0-33-23.5-56.5T680-680H280q-33 0-56.5 23.5T200-600v120h-80v-120q0-66 47-113t113-47h80l40-80h160l40 80h80q66 0 113 47t47 113v160h-80Z'
            ></path>
          </svg>

          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-6 w-6 text-gray-400 hidden md:inline-flex'
          >
            <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
          </svg>
        </div>
      </form>

      <User className='ml-auto whitespace-nowrap' />
    </div>
  )
}
