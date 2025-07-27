'use client'
import { Cart } from "../Cart/Cart";
import { Router, Routes, Route } from "react-router-dom"
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',

    },
    {
      id: 'men',
      name: 'Men',

    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}


export default function Navigation() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  }

  const handleCategoryClick = (category) => {
    navigate(`/${category.id}/category=${category.id}`);
  };


  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40">
        {/* Backdrop */}
        <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity" />

        {/* Drawer */}
        <div className="fixed inset-0 flex justify-end">
          <DialogPanel
            transition
            className="relative w-72 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png" // Replace with your logo
                  alt="User Logo"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-3 text-lg font-semibold text-gray-800">
                  Welcome
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Options */}
            <div className="flex flex-col mt-4 space-y-4 px-4">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/profile");
                }}
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-700"
              >
                Profile
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/account/order");
                }}
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-700"
              >
                My Orders
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  // Add logout functionality here
                  console.log("User logged out");
                }}
                className="w-full text-left px-4 py-3 bg-red-100 hover:bg-red-200 rounded-lg font-medium text-red-600"
              >
                Logout
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://e7.pngegg.com/pngimages/64/316/png-clipart-logo-brand-lacoste-clothing-crocodile-crocodile-animals-text.png"
                    className="h-20 w-auto p-2"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <a
                      key={category.name}
                      onClick={() => handleCategoryClick(category)}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                    >
                      {category.name}
                    </a>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center space-x-4">
                {/* User Drawer Button */}
                <button
                  onClick={() => setOpen(true)}
                  className="p-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png" // User icon
                    alt="User"
                    className="h-8 w-8 rounded-full"
                  />
                </button>

                {/* Currency */}
                <div className="hidden lg:flex items-center">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                    className="block h-auto w-5 shrink-0"
                  />
                  <span className="ml-2 text-sm font-medium">CAD</span>
                </div>

                {/* Search */}
                <div>
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                {/* Cart */}
                <div>
                  <button
                    onClick={handleCartClick}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
