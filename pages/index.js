import Head from '../components/Headfunc'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'



export default function Home() {
    const [controlsAttr, setControlsAttr] = useState(false);
    
    
    return (
    <div id='main-div' className='bg-color100 dark:bg-color101 relative'>
      <Head title="Sayantika Ghosh - An aspiring web developer"></Head>
      <Header/> 
      <main>
        <section className='flex justify-center pt-24 pb-20'>
          <h1 className={`font-mono self-center text-6xl text-color101 dark:text-color100 pr-10`}>
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-end'>
              <span className="hover:text-pink-400">A</span>
              <span className="hover:text-pink-400">n</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pb-2 flex justify-end'>
              <span className="hover:text-pink-400">a</span>
              <span className="hover:text-pink-400">s</span>
              <span className="hover:text-pink-400">p</span>
              <span className="hover:text-pink-400">i</span>
              <span className="hover:text-pink-400">r</span>
              <span className="hover:text-pink-400">i</span>
              <span className="hover:text-pink-400">n</span>
              <span className="hover:text-pink-400">g</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pb-1 flex justify-end'>
              <span className="hover:text-pink-400">w</span>
              <span className="hover:text-pink-400">e</span>
              <span className="hover:text-pink-400">b</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-end'>
              <span className="hover:text-pink-400">d</span>
              <span className="hover:text-pink-400">e</span>
              <span className="hover:text-pink-400">v</span>
              <span className="hover:text-pink-400">e</span>
              <span className="hover:text-pink-400">l</span>
              <span className="hover:text-pink-400">o</span>
              <span className="hover:text-pink-400">p</span>
              <span className="hover:text-pink-400">e</span>
              <span className="hover:text-pink-400">r</span>
            </div>
            
          </h1>
          <video className="rounded-lg w-7/12" autoPlay muted loop preload="auto" controls={controlsAttr} onMouseOver={()=>setControlsAttr(true)} onMouseOut={()=>setControlsAttr(false)}>
            <source src="https://res.cloudinary.com/sayantika/video/upload/v1642683329/v1_hji5lu.mp4" type="video/mp4" />
          </video>
        </section>  
      </main>
      <Footer/>
    </div>
  )
}
