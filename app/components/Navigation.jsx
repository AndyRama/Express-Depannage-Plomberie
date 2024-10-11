'use client'

import Image from 'next/image'
import IconLogo from '@/app/express-depannage.jpg'
import Link from 'next/link'
import React, { Fragment, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HiMenu } from 'react-icons/hi'

const navigationMenu = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  let newPathname = ''

  newPathname = pathname
  if (pathname && pathname.includes('/blog')) {
    newPathname = '/blog'
  }

  const [] = useState({})

  let wHeight = null
  let wWidth = null
  if (typeof window !== 'undefined') {
    wHeight = window.innerHeight
    wWidth = window.innerWidth
  }

  const [dimensions, setDimensions] = useState({
    heigth: wHeight,
    width: wWidth,
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
      if (dimensions.width > 768 && open) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return (_) => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div>
      <header
        className="py-4 fixed w-full z-[10] bg-[#1D1D1D] opacity-90 "
        alt="NavBar"
      >
        <h1 className="sr-only">Navigation</h1> {/* Add this line */}
        <div className=" px-4 md:px-14  mx-auto flex items-center text-white justify-between">
          <div>
            <Link
              href="/"
              className=" flex flex-row text-3xl md:text-4xl font-bold "
            >
              {/* Logo - content left*/}
              <span className="my-[-10px] mx-3">
                <Image
                  src={IconLogo}
                  weight={60}
                  height={60}
                  alt="logo"
                  className="rounded-full"
                />
              </span>
              {/* Name Link - content left*/}
                Express<span className='hidden md:contents text-red-500'> Dépannage</span>
              <span className="text-red-500 md:text-white">.</span>
            </Link>
          </div>

          {/* Menu Navigation - content center - Link */}
          <div>
            <ul
              role="list"
              className="hidden lg:flex space-x-8 text-white text-2xl"
            >
              {navigationMenu.map((menu, index) => (
                <li key={menu.label}>
                  <Link
                    href={menu.href}
                    className={`relative before:content-['']
                     before:absolute before:bottom-0 before:left-0 before:w-full
                     before:h-[2px] before:bg-red-500 before:origin-[100%, 50%]
                     before:transistion-all before:duration-300 before:ease-in-out
                     before:scale-x-0 before:scale-y-[1] before:scale-z[1]
                     before:wil-change-transform hover:before:origin-[100%, 0%]
                     hover:before:scale-x-[1] hover:before:scale-y-[1]
                     hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase
                     font-semibold pb-2 ${
                       newPathname == menu.href
                         ? 'border-red-400 before:scale-x-[1]'
                         : ' border-transparent'
                     }`}
                    onClick={() => setOpen(false)}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="lg:hidden text-lg text-white rounded-md"
              onClick={() => setOpen(true)}
              aria-label="Open menu" // Add this line
            >
              {open ? null : <HiMenu className="text-[32px] mt-2" />}
            </button>
          </div>

          {/* Menu Navigation - content right - btn */}
          <div className="border-gray-200 px-4 py-6 sm:px-6 hidden lg:contents">
            {' '}
            <div>
              <Link
                href="/#programme"
                alt="Btn Subcribes"
                className="block text-center text-[14px] tracking-2[2px]
                            font-bold uppercase py-3 px-5 hover:text-red-500 hover:shadow-2xl hover:bg-transparent border border-red-500 text-white
                            rounded-md"
              >
                05.56.23.89.79
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Navigation - open content right */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveForm="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transistion-all ease-in-out duration-500 sm:duration-500"
                  enterForm="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition-all ease-in-out duration-500 sm:duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#1D1D1D] shadow-xl">
                      <div className="flex-1 overflow-y-auto px-8 py-8 sm:px-12">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Menu
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 -mt-5 -mr-5 text-white hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list">
                              {navigationMenu.map((menu, index) => (
                                <li key={menu.label}>
                                  <Link
                                    href={menu.href}
                                    className={`py-2 text-white hover:text-gray-500 inline-block relative before:content-['']
                                    before:absolute before:bottom-0 before:left-0 before:w-full
                                    before:h-[2px] before:bg-gradient-to-r from-red-500 to-red-800 before:origin-[100%, 50%]
                                    before:transistion-all before:duration-300 before:ease-in-out
                                    before:scale-x-0 before:scale-y-[1] before:scale-z[1]
                                    before:wil-change-transform hover:before:origin-[100%, 0%]
                                    hover:before:scale-x-[1] hover:before:scale-y-[1]
                                    hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase
                                    font-semibold pb-2 ${
                                      newPathname == menu.href
                                        ? 'border-red-500 before:scale-x-[1]'
                                        : ' border-transparent'
                                    }`}
                                    onClick={() => setOpen(false)}
                                  >
                                    {menu.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Menu Navigation - open content right - btn */}
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div>
                          <Link
                            href="/prestations"
                            alt="btn subscribes"
                            className="block text-center text-[11.5px] tracking-2[2px]
                            font-bold uppercase bg-gradient-to-r from-red-500 to-red-800 py-4 px-5 text-black hover:text-white
                            rounded-md"
                          >
                            05.56.23.89.79
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}