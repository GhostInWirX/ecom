'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const navigation = {
  categories: [
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)  // Mobile menu
  const [drawerOpen, setDrawerOpen] = useState(false) // Right side user drawer
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/${category.id}/category=${category.id}`)
  }

  const handleOrdersClick = () => {
    navigate('/account/order')
    setDrawerOpen(false)
  }

  return (
    <div className="bg-white">
      {/* Mobile Menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25 transition-opacity" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <XMarkIcon className="size-6" aria-hidden="true" />
              </button>
            </div>

            {/* Categories */}
            <div className="mt-2 px-4">
              {navigation.categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => handleCategoryClick(category)}
                  className="block py-4 text-base font-medium text-gray-900 cursor-pointer"
                >
                  {category.name}
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* ✅ Right Drawer for Account */}
      <Dialog open={drawerOpen} onClose={setDrawerOpen} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity" />
        <div className="fixed inset-0 flex justify-end">
          <DialogPanel className="w-72 bg-white shadow-xl p-6 flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">My Account</h2>
              <button onClick={() => setDrawerOpen(false)}>
                <XMarkIcon className="size-6 text-gray-500" />
              </button>
            </div>
            <hr />
            <div
              className="cursor-pointer text-gray-700 hover:text-indigo-600 font-medium"
              onClick={handleOrdersClick}
            >
              My Orders
            </div>
            <div
              className="cursor-pointer text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => { alert('Profile page coming soon!') }}
            >
              My Profile
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Header */}
      <header className="relative bg-white">

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <Bars3Icon className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <img
                    alt="Logo"
                    src="https://e7.pngegg.com/pngimages/674/477/png-clipart-lacoste-logo-brand-clothing-polo-shirt-polo-shirt-text-fashion.png"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Desktop navigation */}
              <PopoverGroup className="hidden lg:ml-8 lg:block">
                <div className="flex space-x-8">
                  {navigation.categories.map((category) => (
                    <a
                      key={category.name}
                      onClick={() => handleCategoryClick(category)}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                {/* ✅ Replace Sign-in with Account Drawer Button */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="hidden lg:block text-sm font-medium text-gray-700 hover:text-indigo-600"
                >
                  My Account
                </button>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <MagnifyingGlassIcon className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon className="size-6 text-gray-400 group-hover:text-gray-500" />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
