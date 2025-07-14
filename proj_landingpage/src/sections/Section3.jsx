import React from 'react'
import Animation from '../components/Animation'
import Button from '../components/Button'

const Section3 = (props) => {
    return (
        <section className="w-[70%] mx-auto my-20 ">
            <Animation entry="fadeSlideInLeft" delay={0} exit="fadeSlideOutRight">
                <h1 className="my-10 text-white font-bold text-3xl">
                    {props.title}
                </h1>
            </Animation>

            <Animation entry="slideUp" delay={0.1} exit="slideDown">
                <p className="text-white font-medium text-lg mb-10">
                    {props.msg}
                </p>
                <Button btn={props.btn} />
            </Animation>

        </section>
    )
}

export default Section3
