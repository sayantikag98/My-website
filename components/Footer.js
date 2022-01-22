import Link from "next/link";

export default function Footer(){
    return (
        <footer className='p-4 w-full flex-col items-center'>
            <section className={`flex w-min  ml-auto mr-auto text-color101 dark:text-color100 font-bold pb-2 pt-2`}>
                <h2 className='p-1 ml-5 mr-5 hover:underline hover:decoration-pink-700 hover:decoration-double'><Link href="https://www.linkedin.com/in/sayantikag98/"><a>LinkedIn</a></Link></h2>
                <h2 className='p-1 ml-5 mr-5 hover:underline hover:decoration-pink-700 hover:decoration-double'><Link href="https://github.com/sayantikag98/"><a>GitHub</a></Link></h2>
                <h2 className='p-1 ml-5 mr-5 hover:underline hover:decoration-pink-700 hover:decoration-double'><Link href="https://github.com/sayantikag98/Resume.git"><a>Resume</a></Link></h2>
            </section>
            <section className="ml-auto flex justify-center"><h6 className={`text-color101 dark:text-color100 font-semibold`}>&copy; 2022 Sayantika Ghosh</h6></section>
        </footer>
    );
}