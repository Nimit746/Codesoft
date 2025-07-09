import React from 'react'

const Card = (props) => {
    return (
        <main className="flex flex-col justify-start items-center w-[30%] aspect-video rounded-2xl shadow-xl">
            <img src={props.image} className="w-full h-full object-cover rounded-t-2xl" />
            <h1 className="self-start text-xl font-bold my-3 w-auto ml-2">
                {props.title}
            </h1>
            <p className="text-lg ml-3">{props.message}</p>
        </main>
    );
}

export default Card
