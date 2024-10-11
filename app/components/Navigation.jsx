'use client';

import Image from 'next/image';
import IconLogo from '@/app/express-depannage.jpg';
import Link from 'next/link';
import React, { Fragment, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { PhoneCall, Clock, Tools, Home, Newspaper, Mail } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { HiMenu } from 'react-icons/hi';

const navigationMenu = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  let newPathname = '';

  //Path blog article 
  newPathname = pathname;
  if (pathname && pathname.includes('/blog')) {
    newPathname = '/blog';
  }

  const [] = useState({});

  //Resize windows
  let wHeight = null;
  let wWidth = null;
  if (typeof window !== 'undefined') {
    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
  }

  const [dimensions, setDimensions] = useState({
    heigth: wHeight,
    width: wWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (dimensions.width > 768 && open) {
        setOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div>
      <header
        className='py-4 fixed w-full z-[10] bg-[#1D1D1D] opacity-90 '
        alt='NavBar'
      >
        <h1 className='sr-only'>Navigation</h1>
        <div className=' px-4 lg:px-14  mx-auto flex items-center text-white justify-between'>
          <div>
            <Link
              href='/'
              className=' flex flex-row text-3xl md:text-4xl font-bold '
            >
              {/* Logo - Navigation - left */}
              <span className='my-[-10px] mx-3'>
                <Image
                  src={IconLogo}
                  weight={60}
                  height={60}
                  alt='logo'
                  className='rounded-full'
                />
              </span>
              Express
              <span className='hidden xl:contents text-red-500'> Dépannage</span>
            </Link>
          </div>

          {/* Link - Navigation - center */}
          <div>
            <ul
              role='list'
              className='hidden lg:flex space-x-8 text-white text-2xl'
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
            {/* Btn - Navigation menu - Mobile */}
            <button
              className='lg:hidden text-lg text-white rounded-md'
              onClick={() => setOpen(true)}
              aria-label='Open menu'
            >
              {open ? null : <HiMenu className='text-[32px] mt-2' />}
            </button>
          </div>

          {/* Btn - Action - Right */}
          <div className='border-gray-200 px-4 py-4 sm:px-6 hidden lg:contents items-center'>
            <div className='flex flex-row'>
              <span className='md:inline mr-0 mt-[20px] font-bold'>
                En Cas D&apos;urgence :
              </span>
              <Link
                href='tel:0669719589'
                alt='Btn Subcribes'
                className='hidden lg:flex align-center text-[22px] tracking-2[2px] w-[auto] font-bold uppercase py-3
                lg:px-2 px-4 hover:text-red-500 hover:shadow-2xl hover:bg-transparent border border-red-500 text-white
                rounded-md mt-1 ml-2'
              >
                <PhoneCall className='w-4 h-4 mt-2 mr-2 flex-row' />
                <span className='flex-row'>06 69 71 95 89</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Menu - Navigation - Mobile - Open */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveForm='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transistion-all ease-in-out duration-500 sm:duration-500'
                  enterForm='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition-all ease-in-out duration-500 sm:duration-500'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  {/* SideRight - Menu - Open */}
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-sm'>
                    <div className='flex h-full flex-col overflow-y-scroll bg-[#1D1D1D] shadow-xl'>
                      <div className='flex-1 overflow-y-auto px-8 py-8 sm:px-12'>
                        <div className='flex items-start justify-between'>
                          <Dialog.Title className='text-lg font-medium text-white'>
                            Menu
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <button
                              type='button'
                              className='relative -m-2 p-2 -mt-5 -mr-5 text-white hover:text-gray-500'
                              onClick={() => setOpen(false)}
                            >
                              <span className='absolute -inset-0.5' />
                              <span className='sr-only'>Close panel</span>
                              <XMarkIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                        </div>

                        {/* Menu SideRight - Navigation - Link */}
                        <div className='mt-8'>
                          <div className='flow-root'>
                            <ul role='list'>
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
                      
                      {/* Btn SideRight - Action - Bottom */}
                      <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                        <span className='md:inline mr-0 mt-[20px] font-bold'>
                          En Cas D&apos;urgence :
                        </span>
                        <div className='flex flex-row'>
                          <Link
                            href='tel:0669719589'
                            alt='btn subscribes'
                            className='block text-center text-[22px]  w-auto tracking-2[2px]
                            font-bold uppercase bg-transparent py-3 px-4 hover:text-red-500 hover:shadow-2xl hover:bg-transparent border border-red-500 text-white
                            rounded-md mt-1 ml-2'
                          >
                            <PhoneCall className='w-4 h-4 mt-2 mr-2 flex flex-row' />
                            <span className=' flex flex-row'>06 69 71 95 89</span>
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
  );
}
