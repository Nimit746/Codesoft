import React from 'react'
import Button from '../components/Button'


const Section1 = () => {
    return (
        <section className='flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-10 pb-10 w-[70%] mx-auto rounded-2xl'
            style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwc6gPv3R3zeVQitVll-FkOtLy8-KiGyt5Ub-CXUB5apZvXwTIDJybNOS4TXZw-KBrDmMaeA6c6DLjKK2XvnTsYk0CFNrP-RFOGcW-38Bof6ydtdItDYV7k5ZprG834Dz3yDdf7HA4BVkEVoJZQ7WNU6MNkblRkHSB-a9vueAJEzuX_r9BaZH96WssBgQT0Eo20kNcoKOTPJgy2FTEuWyhkRLzmi6UMwaAm79OY7ovdHmngxP61f6tlgnNqc34Z1aX-7L1T4e1-mwu')",
            }}
        >
            <h1 className='text-6xl text-white font-bold'>Experience the Future of Driving</h1>
            <p className='text-xl text-white mb-3'>Explore our innovative car models,designed for the performance and sustainabilty. Customize your dream car and join the electric evolution.</p>
            <Button btn='Design your car' />
        </section>
    )
}

export default Section1
