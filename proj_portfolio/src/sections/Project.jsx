import React from 'react'
import Card from '../components/Card'

const Project = () => {
    return (
        <div id='projects' className='mt-30 flex w-full items-start justify-start flex-col gap-10'>

            <h1 className='text-4xl font-bold my-10 '>
                Projects
            </h1>
            <div className='w-[100%] flex gap-20'>
                <Card title='Fitness AI Chatbot'
                    message='This is a fitness ai chatbot made in React.JS, it is personalized fitness ai chatbot.'
                    image='Chatbot.png'
                />
                
            </div>

        </div>
    )
}

export default Project
