'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { INav, navigation } from '@/constants/navigation'
import Loading from '../Loading'

function classNames(...classNames: string[]) {
  return classNames.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { status } = useSession()

  if (status === 'loading') return <Loading />

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link className="text-black text-2xl font-bold" href={'/'}>
                    CPE 🐜
                  </Link>
                </div>

                <div className="hidden w-full md:inline-block md:max-w-xs lg:w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item: INav, i: number) => (
                        <Link
                          key={i}
                          href={item.href}
                          className={'text-black rounded-full px-3 py-2 text-sm font-medium'}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                      {status === 'authenticated' ? (
                        <div className="relative">
                          <div
                            onClick={() => signOut()}
                            className={classNames(
                              'text-white bg-[#4A60AC] hover:bg-[#394a87] hover:text-white cursor-pointer',
                              'rounded-full px-3 py-2 text-sm font-medium'
                            )}
                          >
                            Sign Out
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => signIn()}
                          className={classNames(
                            'text-white bg-[#4A60AC] hover:bg-[#394a87] hover:text-white cursor-pointer',
                            'rounded-full px-3 py-2 text-sm font-medium'
                          )}
                        >
                          Sign In
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'text-gray-900 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
