import { getProviders, type ClientSafeProvider, signIn } from 'next-auth/react'
import type { GetServerSideProps } from 'next'

import { Header } from '@/components/go-v3/Header'
import Image from 'next/image'

interface SignInProps {
  providers: Record<string, ClientSafeProvider> | null
}

export default function SignIn({ providers }: SignInProps) {
  if (!providers) {
    return (
      <div className='flex items-center justify-center text-center'>
        <Header />
        No providers found.
      </div>
    )
  }

  return (
    <>
      <Header />

      <Image
        width={300}
        height={100}
        priority
        src='/google.png'
        alt='googleImage'
        className='mx-auto mt-30 object-cover'
      />

      <div className='flex items-center justify-center text-center h-full w-full gap-x-4 mt-20'>
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/go-v3' })}
              className='bg-red-400 hover:bg-red-500 text-white font-bold p-3 rounded-lg cursor-pointer'
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
