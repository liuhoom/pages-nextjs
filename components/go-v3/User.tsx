'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

interface UserProps {
  className?: string
}

export function User({ className }: UserProps) {
  const { data: session } = useSession()

  if (!session) {
    return (
      <>
        <button
          className={`px-6 py-2 bg-blue-400 text-white rounded-md cursor-pointer hover:brightness-125 ${className}`}
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </>
    )
  }

  return (
    <Image
      src={session.user?.image ?? ''}
      alt='userImage'
      width={32}
      height={32}
      className={`rounded-full cursor-pointer p-[1.5px] border border-gray-300 hover:scale-110 transition-transform duration-200 ease-out ${className}`}
      onClick={() => signOut()}
    />

    // <div className=''>{session?.user?.name}</div>
  )
}
