import Head from '../components/Headfunc'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'



export default function Home() {
    const [controlsAttr, setControlsAttr] = useState(false);
    
    
    return (
      
    <div id='main-div' className='bg-color100 dark:bg-color101 relative'>
      <Head title="Sayantika Ghosh - An aspiring web developer"></Head>
      <Header/> 
      <main>
        <section className='flex justify-center pt-24 pb-20 bg-color1 min-h-screen'>
          <h1 className={`font-mono self-center text-6xl text-color101 dark:text-color100 pr-10`}>
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-end'>
              <span className="hover:text-color12">A</span>
              <span className="hover:text-color12">n</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pb-2 flex justify-end'>
              <span className="hover:text-color12">a</span>
              <span className="hover:text-color12">s</span>
              <span className="hover:text-color12">p</span>
              <span className="hover:text-color12">i</span>
              <span className="hover:text-color12">r</span>
              <span className="hover:text-color12">i</span>
              <span className="hover:text-color12">n</span>
              <span className="hover:text-color12">g</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pb-1 flex justify-end'>
              <span className="hover:text-color12">w</span>
              <span className="hover:text-color12">e</span>
              <span className="hover:text-color12">b</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-end'>
              <span className="hover:text-color12">d</span>
              <span className="hover:text-color12">e</span>
              <span className="hover:text-color12">v</span>
              <span className="hover:text-color12">e</span>
              <span className="hover:text-color12">l</span>
              <span className="hover:text-color12">o</span>
              <span className="hover:text-color12">p</span>
              <span className="hover:text-color12">e</span>
              <span className="hover:text-color12">r</span>
            </div>
            
          </h1>
          <video className="rounded-lg w-7/12" autoPlay muted loop preload="auto" controls={controlsAttr} onMouseOver={()=>setControlsAttr(true)} onMouseOut={()=>setControlsAttr(false)}>
            <source src="https://res.cloudinary.com/sayantika/video/upload/v1642683329/v1_hji5lu.mp4" type="video/mp4" />
          </video>
        </section> 
        <section className='pt-14 pb-14 bg-color0 border-t-8 border-b-8 border-black min-h-screen'>
          <h1 className='text-xl bg-color67 w-3/12 p-1 m-2 mb-14 flex justify-center rounded-lg'>My Projects at a glance</h1>
          <div id="carouselExampleIndicators" className="carousel slide relative flex justify-center" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 top-64 left-0 flex justify-center p-0 mb-4 ">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active float-left w-full">
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-color4 shadow-lg">
                  <Image className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg max-w-sm" src="/images/sudoku-solver-API.png" alt="Wild Landscape" height={500} width={1000} />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Sudoku Solver API</h5>
                    <p className="text-gray-700 text-base mb-4">
                    This sudoku solver takes a string as the initial board configuration and returns the result as a JSON object. This is a part of Rapid API Hub.
                    </p>
                    <div className="flex space-x-2 justify-center">
                    <Link href="/projects/#project1"><a>
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block px-6 py-2.5 bg-color1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        View Project
                      </button>
                      </a></Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="carousel-item float-left w-full">
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-color4 shadow-lg">
                  <Image className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg max-w-sm" src="/images/tic-tac-toe.png" alt="Wild Landscape" height={500} width={1000} />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Tic Tac Toe</h5>
                    <p className="text-gray-700 text-base mb-4">
                      A Tic Tac Toe game built using vanilla javascript and UI designed using CSS framework Bootstrap.
                    </p>
                    <div className="flex space-x-2 justify-center">
                    <Link href="/projects/#project2"><a>
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block px-6 py-2.5 bg-color1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >View Project</button>
                      </a></Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="carousel-item float-left w-full">
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-color4 shadow-lg">
                  <Image className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg max-w-sm" src="/images/IMDb-clone.png" alt="Wild Landscape" height={500} width={1000} />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">IMDb UI clone</h5>
                    <p className="text-gray-700 text-base mb-4">
                      This IMDb UI clone was made using only HTML and CSS. No framework was used for this project.
                    </p>
                    <div className="flex space-x-2 justify-center">
                    <Link href="/projects/#project3"><a>
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block px-6 py-2.5 bg-color1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >View Project</button>
                      </a></Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section> 

        
      </main>
      <Footer/>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"/>
    </div>
  )
}
