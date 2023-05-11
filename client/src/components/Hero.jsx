import React from 'react'
import heroImage from '../images/portBackground2.jpg'
import heroGif from '../images/portGif2.gif'
import waveGif from '../images/hey-wave2.gif'
const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-emerald-600 via-emerald-400 to-emerald-100 text-white">
            <div
                className="flex mx-auto max-w-full px-4 py-32 h-screen items-start"
                // style={{ backgroundImage: `url(${heroGif})`, backgroundSize: 'cover' }}
            >

                <div className="mx-auto flex flex-col max-w-3xl text-center backdrop-blur-md pb-8 pt-4 px-4 md:grid">
                    <div className='flex justify-center text-white font-extrabold text-5xl pr-20 sm:pr-24 sm:text-7xl'>
                        <h1 className='pt-2'>Hey</h1>
                        <img src={waveGif} className='w-16 sm:w-24'/>
                        </div>
                        <h1 className='text-white font-extrabold text-5xl sm:text-7xl sm:pl-6'>I'm Nickon</h1>
                        
                         

                        {/* <span className="sm:block"> Increase Conversion. </span> */}
                    

                    
                    

                    <p className="mx-auto mt-4 max-w-md font-bold sm:text-xl/relaxed">
                        Full-Stack Engineer 
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <a href="https://www.linkedin.com/in/nickon-babaei/" target="_blank" rel="noreferrer" >
                            <div class="flex gap-3 items-center h-10 hover:scale-110">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="70"
                                    width="60"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                    </path>
                                </svg>

                            </div>
                        </a>
                        <a href="https://github.com/nickonbabaei" target="_blank" rel="noreferrer" >
                            <div class="flex gap-3 items-center h-10 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="60" height="70" viewBox="0 0 24 24">

                                    <g data-name="Layer 2">

                                        <rect width="24" height="24" opacity="0" />

                                        <path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z" />

                                    </g>

                                </svg>

                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/nickon-babaei/" target="_blank" rel="noreferrer" >
                            <div class="flex gap-3 items-center h-10 hover:scale-110">
                                <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" ><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" /></svg>

                            </div>
                        </a>

                    </div>

                </div>

                

            </div>
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                    <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>


        </section>


    )
}

export default Hero