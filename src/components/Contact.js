import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#393E46] text-gray-300 flex justify-center items-center p-4'>
        <form method='post' action='https://getform.io/f/19147f85-f9ea-4db3-b126-b41d028c7647' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFD369]'>Kontaktuj mně</p>
                <p className='py-4'>Kontaktuj mne pomocí formuláře níže, nebo na email kubak@icloud.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Jméno' name='name' />
            <input className=' my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name='message' rows="10" placeholder='Zpráva'></textarea>
            <button className='border-2 hover:bg-[#FFD369] hover:border-[#FFD369] px-4 py-3 my-8 mx-auto flex items-center hover:font-bold hover:text-black '>Odešli</button>

        </form>
      
    </div>
  )
}

export default Contact
