import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Header(){
    const {theme, setTheme} = useTheme();

    return (
        <header className='absolute w-full h-16 flex justify-between'>
          <section className="flex w-72 justify-around items-center">
            <button
            aria-label="Toggle Dark Mode"
            className="h-12 w-12 "
            onClick={()=>setTheme(theme === "dark"?"light":"dark")}
            >
              {(theme === "dark")?<span className="material-icons">light_mode</span>:<span className="material-icons">dark_mode</span>}
            </button>
            <h1 className={`text-xl text-color101 dark:text-color100 font-bold`}>Sayantika Ghosh</h1> 
          </section>
          <section className='flex items-center'>
            <nav className={`w-96 flex justify-between text-color101 dark:text-color100 pr-12 font-bold`}>
              <h2 className='p-1 rounded-lg hover:bg-color100 hover:text-color101'><Link href="/"><a>Home</a></Link></h2>
              <h2 className='p-1 rounded-lg hover:bg-color100 hover:text-color101'><Link href="/about"><a>About</a></Link></h2>
              <h2 className='p-1 rounded-lg hover:bg-color100 hover:text-color101'><Link href="/projects"><a>Projects</a></Link></h2>
              <h2 className='p-1 rounded-lg hover:bg-color100 hover:text-color101'><Link href="/contact"><a>Contact</a></Link></h2>
            </nav>
          </section>
        </header>
    );
}