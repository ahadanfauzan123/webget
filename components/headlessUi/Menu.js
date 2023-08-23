import { Dialog, Transition } from '@headlessui/react'
import {React,Fragment,useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import {GrClose} from 'react-icons/gr'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
    function closeMenu() {
        return setIsOpen(false)
    }
    function openMenu() {
        return setIsOpen(true)
    }
  return (
    <>
    <div>
        <BiMenuAltRight className='h-10 w-10 cursor-pointer text-white'
        onClick={openMenu} />
    </div>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-50' onClose={closeMenu}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-80"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className='fixed inset-0 bg-black bg-opacity-10'></div>
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className="flex min-h-full items-center justify-center text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="flex flex-col items-center justify-center w-screen h-screen transform overflow-hidden bg-black opacity-[0.90] p-6 align-middle transition-all">
                            
                            <div className="mt-2">
                                <ul className='space-y-7'>
                                    <li><h1 data-title='PRICING' className='text-5xl cursor-pointer tracking-[10px] font-semibold relative pricing'>PRICING</h1></li>
                                    <li><h1 data-title='TEAM' className='text-5xl cursor-pointer tracking-[10px] font-semibold relative team'>TEAM</h1></li>
                                    <li><h1 data-title='PROJECT' className='text-5xl cursor-pointer tracking-[10px] font-semibold relative project'>PROJECT</h1></li>
                                    <li><h1 data-title='CONTACT' className='text-5xl cursor-pointer tracking-[10px] font-semibold relative contact'>CONTACT</h1></li>
                                </ul>
                            </div>
                            <div className='absolute top-6 right-2'>
                                <div className='w-18 h-16 cursor-pointer' onClick={closeMenu}>
                                    <AiOutlineClose className='w-10 h-10 text-white' />
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default Menu