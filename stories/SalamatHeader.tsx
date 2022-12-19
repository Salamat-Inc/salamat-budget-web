import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { TextLink } from './TextLink';
import { Avatar } from './Avatar';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reports',
    description:
      'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentChartBarIcon,
  },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
];

export const SalamatHeader = (props: any) => {
  const renderMobileHeaderPopover = () => (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-salamat-orange rounded-lg bg-salamat-black-less shadow-lg ring-1 ring-salamat-yellow ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <Link
                href="#"
                className="text-salamat-orange-dark font-bold font-montserrat text-2xl"
              >
                Pomelo
              </Link>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-salamat-black-less p-2 text-salamat-orange-dark hover:text-salamat-orange-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-salamat-orange-dark">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                {/* Where the nav goes */}
                {/* {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))} */}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5">
            <div className="mt-6">
              <Link
                href="#"
                className="font-montserrat flex w-full items-center justify-center rounded-md border border-transparent bg-salamat-orange-dark px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-salamat-orange-light"
              >
                Sign up
              </Link>
              <p className="mt-6 text-center text-base font-medium text-salamat-orange-dark">
                Existing customer?{' '}
                <Link
                  href="#"
                  className="text-salamat-orange hover:text-salamat-orange-light font-montserrat"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );

  return (
    <Popover className="relative bg-salamat-black-less">
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link
            href="#"
            className="text-salamat-orange-dark font-bold font-montserrat text-2xl"
          >
            <span className="sr-only">Your Company</span>
            Pomelo
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-salamat-orange-dark hover:text-salamat-orangefocus:outline-none focus:ring-2 focus:ring-inset focus:ring-salamat-orange-light">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <TextLink
            url="#"
            twClasses="whitespace-nowrap text-base font-medium text-salamat-white hover:text-gray-900"
          >
            Team
          </TextLink>
          <TextLink
            url="#"
            twClasses="ml-4 whitespace-nowrap text-base font-medium text-salamat-white hover:text-gray-900"
          >
            Settings
          </TextLink>

          {/* For the user if they are logged in */}
          <Avatar
            size="small"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            twClasses="ml-4"
          />
        </div>
      </div>

      {/* The beginning of the mobile overlay */}
      {renderMobileHeaderPopover()}
    </Popover>
  );
};
