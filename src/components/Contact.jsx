import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-black text-white'>
            <div className='flex flex-col p-4 justify-center items-center h-full'>
                <div className='mt-8 lg:pt-20 pt-40 pb-8'>
                    <h1 className='text-4xl text-red-600 font-extrabold border-b-4 border-red-600 p-2 inline z-10'>Contact</h1>
                </div>
                <div className='flex justify-center mb-20 mt-20'>
                    <form action="https://getform.io/f/74275214-e22c-46a2-9959-fe534ed76c0d" method='POST' className='flex flex-col w-full max-w-xl'>
                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-white focus:bg-white border-2 rounded-md text-black focus:outline-none mb-4 w-full' id="" />
                        <input type="email" name="email" placeholder='Enter your email' className='my-4 p-2 bg-white border-2 rounded-md text-black focus:bg-white focus:outline-none mb-4 w-full' id="" />
                        <textarea name="message" id="" placeholder='Enter your message...' className='p-2 bg-white border-2 rounded-md text-black focus:outline-none focus:bg-white mb-4 w-full' rows="10" cols={30}></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-3 my-8 mx-auto flex rounded-md z-10 hover:scale-110 duration-300'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact