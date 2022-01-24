import Head from '../components/Headfunc'
import Header from '../components/Header'
import Link from 'next/link';

export default function About(){
    return (
        <div className='bg-color101 h-screen'>
            <Head title="About me"></Head>
            <Header></Header>
            <main className='pl-10 pr-10'>
                <h1 className="text-5xl pt-24 pb-8">
                    About Me
                </h1>

                <p className="text-xl font-dark leading-relaxed mt-6 mb-4 text-white">
                    Hi, I'm <span className='underline underline-offset-1 decoration-color100 decoration-double'>Sayantika Ghosh</span> - an aspiring web developer from West Bengal, India. I have been working in this domain for six months now making personal projects and learning new things everyday. I have worked with <span className='underline underline-offset-1 decoration-color100 decoration-double'>HTML</span>, <span className='underline underline-offset-1 decoration-color100 decoration-double'>CSS</span>, <span className='underline underline-offset-1 decoration-color100 decoration-double'>JavaScript</span>, <span className='underline underline-offset-1 decoration-color100 decoration-double'>React.js</span>, <span className='underline underline-offset-1 decoration-color100 decoration-double'>Bootstrap</span>, <span className='underline underline-offset-1 decoration-color100 decoration-double'>TailwindCSS</span>, <span className='underline underline-offset-1 decoration-color100 decoration-double'>Node.js</span>, <span className='underline underline-offset-1 decoration-color100 decoration-double'>Express.js</span> and <span className='underline underline-offset-1 decoration-color100 decoration-double'>MongoDB</span> during the various projects that I have made. 

                    I love learning and contributing to the tech community and it has become a significant part of my career. Apart from the web I like to improve upon my Data Structure and Algorithms skills which are significantly important to overall improve myself in writing accurate and efficient code.

                    All my works are listed on <Link href="https://github.com/sayantikag98/"><a className='underline underline-offset-1 decoration-color5 decoration-double p-0.5 rounded hover:bg-color0 hover:text-black'>GitHub</a></Link>.
                    
                </p>
                   
            </main>
        </div>
    );
}