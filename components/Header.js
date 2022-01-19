import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
    return (
        <header className='fixed w-full h-14 bg-gradient-to-r from-purple-400 to-pink-400 flex justify-between'>
          <section className='flex w-64 pl-12 justify-between items-center'>
            <Image className="rounded" src="/images/logo.png" alt="logo" width={40} height={30}/>
            <h1 className="text-xl text-white font-bold">Sayantika Ghosh</h1> 
          </section>
          <section className='flex items-center'>
            <nav className='w-96 flex justify-between text-white pr-12 font-bold'>
              <h2 className='p-1 rounded-lg hover:bg-white hover:text-pink-500 hover:tracking-wider'><Link href="/"><a>Home</a></Link></h2>
              <h2 className='p-1 rounded-lg hover:bg-white hover:text-pink-500 hover:tracking-wider'><Link href="/about"><a>About</a></Link></h2>
              <h2 className='p-1 rounded-lg hover:bg-white hover:text-pink-500 hover:tracking-wider'><Link href="/projects"><a>Projects</a></Link></h2>
              <h2 className='p-1 rounded-lg hover:bg-white hover:text-pink-500 hover:tracking-wider'><Link href="/contact"><a>Contact</a></Link></h2>
            </nav>
          </section>
        </header>
    );
}