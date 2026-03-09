'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CoinBase from "../assets/images/coinbaseLogo.svg"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { GlobeAltIcon } from '@heroicons/react/24/solid'
import IconButton from '../common/IconButton'
import NormalButton from '../common/NormalButton'
import {useNavigate} from "react-router-dom";


const navigation = [
  { name: 'cryptocurrencies', href: '#' },
  { name: 'Individuals', href: '#' },
  { name: 'Businesses', href: '#' },
  { name: 'Institutions', href: '#' },
  { name: 'Developers', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate(); // 2. Initialize navigate

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-6">
          <a href="#" className="-m-1.5 p-1.5">
            
            <img
              alt=""
              src={CoinBase}
              className="h-8 w-auto"
            />
          </a>
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden gap-x-3">
          
          <IconButton>
                   <MagnifyingGlassIcon className='size-4'/>
                   </IconButton>
                   
          <NormalButton color={"bg-blue-600"} text={"Sign up"} text_color={"text-white"} onClick={() => {
            navigate("/signup")
                   }}></NormalButton>
                   
                   
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex gap-x-2">
          
          
          <IconButton>
          <MagnifyingGlassIcon className='size-4'/>
          </IconButton>
          <IconButton>
            <GlobeAltIcon className='size-4'/>
          </IconButton>          
          
          <NormalButton color={"bg-gray-300 px-4 py-0.5"} text={"Sign in"} text_color={"text-gray-900"} onClick={()=>navigate("/signin")}></NormalButton>
          <NormalButton color={"bg-blue-600 px-4 py-0.5"} text={"Sign up"} text_color={"text-white"} onClick={()=>navigate("/signup")}></NormalButton>
         
          </div>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={CoinBase}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
              
              
              </div>
              <div className="py-6 flex gap-1.5">
                <IconButton>
                           <GlobeAltIcon className='size-4'/>
                         </IconButton>          
                                        
                         <NormalButton color={"bg-gray-300 px-4 py-3"} text={"Sign in"}  onClick={()=>navigate("/signin")} text_color={"text-gray-900"}></NormalButton>
                
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
