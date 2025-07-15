import React from 'react'

const Screen = (props) => {
    return (
        <section className="flex flex-col justify-center items-center my-5 w-10/12 mx-auto text-black text-3xl text-end overflow-x-scroll P-30">
            <textarea
                readOnly
                value={props.value}
                className="w-full p-4 rounded-t-lg text-2xl resize-none bg-white text-black hide-scrollbar max-h-[8vh] outline-none overflow-y-hidden"
                rows={1}
                placeholder="0"
            />
            <textarea
                readOnly
                value={props.result}
                className="w-full p-4 rounded-b-lg text-3xl resize-none bg-gray-100 text-black hide-scrollbar font-bold max-h-[8vh] outline-none overflow-y-hidden"
                rows={1}
                placeholder="0"
            />
        </section>
    );
};

export default Screen
