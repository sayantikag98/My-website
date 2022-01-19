import Head from '../components/Headfunc'
import Header from '../components/Header'
import VideoPlayer from '../components/VideoPlayer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head title="Sayantika Ghosh - An aspiring web developer"></Head>
      <Header></Header> 
      <main>
        <section className='flex-col pt-28'>
          <h1 className='text-center w-10/12 font-mono text-7xl pb-20 ml-auto mr-auto text-purple-400'>
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <span className="hover:text-pink-400">A</span>
              <span className="hover:text-pink-400">n</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pb-2'>
              <span className="hover:text-pink-400">a</span>
              <span className="hover:text-pink-400">s</span>
              <span className="hover:text-pink-400">p</span>
              <span className="hover:text-pink-400">i</span>
              <span className="hover:text-pink-400">r</span>
              <span className="hover:text-pink-400">i</span>
              <span className="hover:text-pink-400">n</span>
              <span className="hover:text-pink-400">g</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pb-1'>
              <span className="hover:text-pink-400">w</span>
              <span className="hover:text-pink-400">e</span>
              <span className="hover:text-pink-400">b</span>
            </div>
            
            <div className='hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
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
          <VideoPlayer/>
        </section>
         
      </main>
    </div>
  )
}
