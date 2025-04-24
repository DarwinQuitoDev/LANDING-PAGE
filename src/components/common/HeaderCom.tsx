import React from "react";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoText from '../../assets/LogoText.png';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Productos', href: '/Productos', current: false },
  { name: 'Contactos', href: '#contactos', current: false },
];

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

interface NavLinkProps {
  name: string;
  href: string;
  current: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href, current }) => (
  <a
    href={href}
    aria-current={current ? 'page' : undefined}
    className={classNames(
      current ? 'bg-indigo-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white',
      'rounded-md px-3 py-2 text-sm font-sans'
    )}
  >
    {name}
  </a>
);

interface MobileMenuButtonProps {
  open: boolean;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ open }) => (
  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
    <span className="sr-only">Open main menu</span>
    {open ? (
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
);

const Navbar: React.FC = () => (
  <Disclosure as="nav" className="bg-rose-50 dark:bg-gray-900 fixed w-full top-0 left-0 z-50">
    {({ open }) => (
      <>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden blur-3xl pointer-events-none">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="ml-2 text-lg font-serif text-[#ff914d]">
                <img className="h-14 w-full" src={LogoText} alt="Your Company" />
              </a>
              <div className="hidden md:flex ml-10 space-x-4">
                {navigation.map((item) => (
                  <NavLink key={item.name} {...item} />
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <MobileMenuButton open={open} />
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <NavLink key={item.name} {...item} />
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

const Example: React.FC = () => {
  return (
    <div className="min-h-full bg-rose-50 dark:bg-gray-900">
      <Navbar />
      {/* Main content goes here */}
    </div>
  );
};

export default Example;
