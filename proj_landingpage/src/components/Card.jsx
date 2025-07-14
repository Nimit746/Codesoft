import React from 'react'

const Card = (props) => {
    return (
        <div className="flex flex-col items-center justify-center text-white gap-3 w-82">
            <img
                src={props.image}
                alt={props.title}
                className='w-full h-[200px] rounded-lg object-cover'
            />
            <div className="flex flex-col items-start justify-cente gap-2 w-full">
                <h3 className='font-bold text-lg'>
                    {props.title}
                </h3>

                <p className='text-[#2b3d4f]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit corporis saepe?
                </p>
            </div>
        </div>
    )
}

export default Card
