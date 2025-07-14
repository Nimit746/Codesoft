import React from 'react'

const Button = (props) => {
    return (
        <button className='text-white bg-[#197fe5] p-3 rounded-full'>
            {props.btn}
        </button>
    )
}

export default Button
