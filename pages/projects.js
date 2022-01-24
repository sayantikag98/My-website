import Head from '../components/Headfunc'
import Header from '../components/Header'
import Image from 'next/image';

export default function Project(){
    return (
        <div className='bg-color101 h-full'>
            <Head title="My projects"></Head>
            <Header></Header>
            <main className='pl-10 pr-10'>
                <h1 className="text-5xl pt-24 pb-8">
                    My projects
                </h1>
                <section>
                    <div>
                        <Image src="/images/sudoku-solver-API.png" height={300} width={500} class="rounded-lg" alt="..." />
                    </div>
                </section>
                   
            </main>
        </div>
    );
}