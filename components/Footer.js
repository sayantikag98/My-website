import Link from "next/link";

export default function Footer(){
    return (
        <footer className='p-4 w-full flex-col items-center'>
            <section className={`flex w-min  ml-auto mr-auto text-color101 dark:text-color100 font-bold pb-2 pt-2`}>
                <h2 className='p-1 ml-5 mr-5 hover:underline hover:decoration-color12 hover:decoration-double'><a href="https://www.linkedin.com/in/sayantikag98/" target="_blank" rel='noopener noreferrer'>LinkedIn</a></h2>
                <h2 className='p-1 ml-5 mr-5 hover:underline hover:decoration-color12 hover:decoration-double'><a href="https://github.com/sayantikag98/" target="_blank" rel='noopener noreferrer'>GitHub</a></h2>
                <h2 className='p-1 ml-5 mr-5 hover:underline hover:decoration-color12 hover:decoration-double'><a href="https://github.com/sayantikag98/Resume.git" target="_blank" rel='noopener noreferrer'>Resume</a></h2>
            </section>
            <section><p className="ml-auto flex justify-center mb-10 text-xl font-bold leading-relaxed mt-6 mb-4 text-color4">Built using <span className="text-color101 bg-color100 p-0.3 rounded pl-1 pr-1 ml-2 mr-2">Next.js</span> and <span className="text-color101 bg-color100 p-0.3 rounded pl-1 pr-1 ml-2 mr-2">Tailwind CSS</span></p></section>
            <section className="ml-auto flex justify-center"><h6 className={`text-color101 dark:text-color100 font-semibold`}>Designed and developed by <span className="text-white bg-color12 p-1 rounded">Sayantika Ghosh</span></h6></section>
        </footer>
    );
}