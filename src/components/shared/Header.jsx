import React from 'react'
import { HiOutlineBell, HiOutlineAnnotation } from 'react-icons/hi'
import profile from '../../assets/picofme.png'
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
const Header = () => {
    return (
        <>
            <div className="flex justify-between p-2">
                <input placeholder="Search" className="rounded-sm p-2 border border-gray-400 w-72" />
                <div className="flex items-center gap-2 text-base">
                    <Popover>
                        <PopoverButton className="focus:outline-none data-[active]:bg-neutral-100 data-[active]:rounded-sm">
                            {' '}
                            <HiOutlineAnnotation className="text-2xl" />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            anchor="bottom"
                            className="divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-10)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                        >
                            <div className="">
                                <a className="block rounded-lg py-2 px-3 transition" href="#">
                                    <p className="font-semibold text-dark">Message</p>
                                    <p className="text-dark/50">No messages</p>
                                </a>
                            </div>
                        </PopoverPanel>
                    </Popover>
                    <Popover>
                        <PopoverButton className="focus:outline-none data-[active]:bg-neutral-100 data-[active]:rounded-sm">
                            {' '}
                            <HiOutlineBell className="text-2xl" />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            anchor="bottom"
                            className="divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-10)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                        >
                            <div className="">
                                <a className="block rounded-lg py-2 px-3 transition" href="#">
                                    <p className="font-semibold text-dark">Notification</p>
                                    <p className="text-dark/50">No notification</p>
                                </a>
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Menu>
                        <MenuButton className="inline-flex items-center gap-2 rounded-md  text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:border-grey-300 data-[open]:border-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            <img src={profile} width="40" />
                        </MenuButton>

                        <MenuItems
                            transition
                            anchor="bottom end"
                            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/80 p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                        >
                            <MenuItem>
                                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
                                    Profile
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
                                    Setting
                                </button>
                            </MenuItem>{' '}
                            <MenuItem>
                                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
                                    Signout
                                </button>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default Header
