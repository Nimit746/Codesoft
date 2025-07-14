import React from 'react'
import { Search, ShoppingCart } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className=" h-15 border-3 border-b-[#1f2e3d] bg-[#111a22] flex items-center justify-between px-20 mb-30">
            <div className="h-10 w-10 text-white flex items-center justify-center">
                <img />
                <p className="font-bold text-2xl">AutoDrive</p>
            </div>

            <div className="h-full flex items-center justify-center gap-10">
                <ul className="flex items-center justify-center gap-x-10 text-white h-full">
                    <li className="border-b-3 border-b-sky-500 text-center py-4 px-2">
                        Models
                    </li>
                    <li>Design</li>
                    <li>Shop</li>
                    <li>Account</li>
                </ul>

                <div className="flex items-center justify-center gap-2 text-white h-full">
                    <Search
                        size={35}
                        className="text-white rounded-full bg-gray-700 p-2"
                    />
                    <ShoppingCart
                        size={35}
                        className="text-white rounded-full bg-gray-700 p-2"
                    />
                </div>
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN76r738rJveED88-Bzc2lmKu-ZwZBFxQ9O0Qx5x4BLRQZRmzJ-4etqY_t1CXPSCD3e0KqRkWQiICKtDUSsd9SDhHSt_GL1ZLTWJnQebM5u-MaSgFfK2QQZBGkPnk-pEJsBQGewqoxki9ej0RTJUGqO7x7-l1rl06dF-S0mKXFK5tjANF9Grf_0TGLKGV30zwR7nA5K0z6CY9GBXLL6MRTC3VbC5hzPB6nSkqic57v237JA84R0sol5sZCjh8DpfM-ihjsYANSKqB4"
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                />
            </div>
        </nav>
    );
}

export default Navbar
