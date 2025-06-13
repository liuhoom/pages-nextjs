import Link from 'next/link'
import { User } from './User'

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <div className='flex justify-between px-[24px] py-[16px]  items-center text-sm'>
      <div className='flex space-x-4 items-center'>
        <Link className='hover:underline' href='#'>
          About
        </Link>
        <Link className='hover:underline' href='#'>
          Store
        </Link>
      </div>

      <div className='flex space-x-4 items-center'>
        <Link className='hover:underline' href='#'>
          Gmail
        </Link>
        <Link className='hover:underline' href='#'>
          Images
        </Link>

        <User />
      </div>
    </div>
  )
}
