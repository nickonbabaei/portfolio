import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_2zpqh2d', 'template_aso4lib', form.current, 'CkKvF-i11b-yPR7Gv')
    .then((result) => {
        console.log(result.text);
        form.current.reset()
        window.confirm("Message sent successfully!")
    }, (error) => {
        console.log(error.text);
    });

  }

  return (
    <section class="text-gray-600 body-font bg-gradient-to-b from-cyan-400 to-cyan-700" id='contact'>
      <div class="pb-12 flex mx-auto max-w-screen-xl sm:flex-nowrap flex-wrap">
        <h1 class="sm:hidden pl-4 text-black text-2xl mb-2 font-bold pt-32">Get in touch!</h1>

        <form ref={form} onSubmit={handleSubmit} class="sm:w-1/2 drop-blur flex flex-col md:ml-auto w-full mt-4 sm:mt-0 pl-4 pr-4 sm:pl-8 xl:pl-0">
          <h1 class="text-black text-3xl mb-2 font-bold hidden sm:block">Get in touch!</h1>
          <p class="leading-relaxed mb-5 text-gray-600">If you're recruiting, feel free to send me a message along with your name and email. If you're interested in software engineering or just looking to chat all things tech, feel free to send a message aswell!</p>
          <div>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="from_name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="from_email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>

          <button type='submit' value='Send' class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
        </form>
        <div class="sm:w-1/2 sm:h-full sm:pr-8 sm:pl-0 w-full px-4 rounded-lg justify-center overflow-hidden flex relative mx-auto pt-4 sm:pt-0">
          <iframe className='w-full rounded-xl' width="100%" height="570" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Downtown%20Toronto+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact