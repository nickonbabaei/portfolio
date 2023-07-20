import React from 'react'

const Contact = () => {
  return (
    <section class="text-gray-600 body-font bg-gradient-to-b from-cyan-400 to-cyan-700 relative" id='contact'>
      <div class="pb-12 flex mx-auto max-w-screen-xl sm:flex-nowrap flex-wrap">

        
        <div class="sm:w-1/2 drop-blur flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-8">
          <h1 class="text-black text-lg mb-1 font-bold">Get in touch!</h1>
          <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
        <div class="sm:w-1/2 sm:h-full sm:pr-8 sm:pl-0 w-full px-8 rounded-lg justify-center overflow-hidden flex relative mx-auto">
          <iframe className='w-full rounded-xl' width="100%" height="570" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Downtown%20Halifax+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact