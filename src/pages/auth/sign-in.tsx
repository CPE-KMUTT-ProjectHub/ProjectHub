import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import Logo from '@/images/KMUTT_LOGO.png'

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-[#EEEEEE] flex justify-center h-screen items-center">
      <div className="block">
        <div className="bg-white px-3 py-2 rounded">
          <Image className="m-0 m-auto" src={Logo} alt="logo" width={100} />
          <hr />
          {Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              className="flex items-center gap-2 transition-all text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
              onClick={() => signIn(provider.id)}
            >
              <FaGithub /> Sign in with {provider.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
