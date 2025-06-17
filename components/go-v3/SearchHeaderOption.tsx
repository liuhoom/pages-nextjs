'use client'

import { useRouter } from 'next/router'

interface SearchHeaderOptionProps {
  title: string
  Icon?: React.ReactNode
  selected?: boolean
}

export function SearchHeaderOption({
  title,
  Icon,
  selected,
}: SearchHeaderOptionProps) {
  const router = useRouter()
  const searchTypeClick = () => {
    router.push(
      `/go-v3/search?term=${router.query.term}&searchType=${
        title === 'Images' ? 'image' : ''
      }`
    )
  }

  return (
    <div
      className={`flex gap-x-1 items-center p-2 border text-sm border-b-4 border-transparent cursor-pointer hover:border-blue-500 ${
        selected && 'text-blue-500 border-blue-500'
      }`}
      onClick={searchTypeClick}
    >
      <p className='text-sm'>{title}</p>
      <div className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M18.126 3.118H5.874l.012-.248c.022-.426.17-.788.448-1.042.278-.253.658-.374 1.097-.374h9.136c.44 0 .82.121 1.097.374.279.254.427.616.448 1.042zm1.925 2.706-.305-.049a6 6 0 0 0-.915-.068H5.17q-.485 0-.914.068l-.306.05.035-.31c.056-.496.256-.905.6-1.187.34-.28.797-.415 1.33-.415h12.182c.533 0 .988.134 1.327.415.341.283.539.692.594 1.188zm-8.71 12.858a1.1 1.1 0 0 1-.305-.79v-2.3H8.747c-.311 0-.584-.097-.8-.305l-.003-.003a1.06 1.06 0 0 1-.308-.775c0-.31.097-.582.307-.792.21-.218.487-.32.804-.32h2.29v-2.289a1.07 1.07 0 0 1 1.083-1.102c.31 0 .582.098.792.307.217.21.32.483.32.795v2.29h2.289c.312 0 .585.102.795.32.209.21.307.48.307.791 0 .302-.1.567-.309.775-.21.21-.482.309-.793.309h-2.29v2.298c0 .31-.104.58-.318.794-.21.21-.482.309-.793.309-.302 0-.567-.101-.775-.31zm7.49 3.864H5.17c-1.01 0-1.81-.252-2.358-.793s-.802-1.334-.802-2.33V9.858c0-.997.254-1.79.802-2.331s1.349-.792 2.358-.792h13.662c1.01 0 1.81.251 2.358.792s.802 1.334.802 2.33v9.566c0 .996-.254 1.789-.802 2.33-.547.541-1.348.793-2.358.793M4.288 20.27c.19.19.484.303.909.303h13.616c.414 0 .707-.113.897-.303s.31-.49.31-.932V9.942c0-.443-.12-.743-.31-.933s-.483-.303-.897-.303H5.197c-.425 0-.72.114-.909.303-.19.19-.308.49-.308.933v9.397c0 .443.119.743.308.932'
            clip-rule='evenodd'
          />
        </svg>
      </div>
    </div>
  )
}
