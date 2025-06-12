import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <div>
      <div className=''>Home Page</div>

      <button onClick={() => signIn()} className='px-5 py-2 cursor-pointer'>
        Sign in
      </button>
    </div>
  )
}
