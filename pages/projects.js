import Head from '../components/Headfunc'
import Header from '../components/Header'
import Image from 'next/image';

export default function Project(){
    return (
        <div className='bg-color101 min-h-screen'>
            <Head title="My projects"></Head>
            <Header></Header>
            <main className='pl-10 pr-10 pb-16'>
                <h1 className="text-5xl pt-24 pb-8">
                    My projects
                </h1>
                <section>
                    <div id="project1"className="flex justify-center pt-16 pb-16 hover:bg-color18 rounded-lg">
                        <a target="_blank" rel='noopener noreferrer' href="https://rapidapi.com/sayantikag98/api/sudoku-solver2/"><Image src="/images/sudoku-solver-API.png" height={400} width={650} class="rounded-lg" alt="..." /></a>
                        <div className='flex-col pt-3 pr-2 mt-10'>
                            <h2 className="text-4xl font-medium leading-tight mt-0 mb-2 text-color69 flex justify-end">Sudoku Solver API</h2>
                            <div className="flex justify-end mb-3">
                                <a className="pl-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub link" href="https://github.com/sayantikag98/sudoku-solver-api.git" target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                <a className="pl-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Website link" href="https://arcane-thicket-65451.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link"></i></a>
                                <a className="pl-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="RapidAPI link" href="https://rapidapi.com/sayantikag98/api/sudoku-solver2/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link"></i></a>

                            </div>
                            <div className="flex justify-end mb-3">
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-blue-400 text-white rounded">Bootstrap</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color16 text-white rounded">Node</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color51 text-white rounded">Express</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color68 text-white rounded">Rapid API</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color95 text-white rounded">Heroku</span>
                            </div>
                            <div className="absolute right-28 block p-6 rounded-lg shadow-lg bg-color4 max-w-md flex justify-end">
                                <p className="text-gray-800 text-right">A simple solver for a 9x9 sudoku grid. It takes a string as the initial board configuration and returns the result as a JSON object. Available on <a className='underline underline-offset-1 decoration-color100 decoration-double' href="https://rapidapi.com/sayantikag98/api/sudoku-solver2/">Rapid API Hub</a>.</p>
                            </div>
                        </div>
                        
                    </div>



                    <div id="project2" className="flex justify-center pt-16 pb-16 hover:bg-color18 rounded-lg">
                        <div className='flex-col pt-3 pl-2 mt-16'>
                            <h2 className="text-4xl font-medium leading-tight mt-0 mb-2 text-color69 flex justify-start">Minimalist_theme</h2>
                            <div className="flex justify-start mb-3">
                                <a className="pr-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub link" href="https://github.com/sayantikag98/vs-code-theme-site.git" target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                <a className="pr-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Website link" href="https://minimalist-theme.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link"></i></a>
                            </div>
                            <div className="flex justify-start mb-3">
                                <span className="mr-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-blue-400 text-white rounded">VS Code</span>
                                <span className="mr-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color16 text-white rounded">JSON</span>
                                <span className="mr-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color51 text-white invisible rounded">Azure Dev</span>
                                <span className="mr-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color68 text-white invisible rounded">RapidAPI</span>
                                <span className="mr-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color95 text-white invisible rounded">Heroku</span>
                            </div>
                            <div className="absolute left-28 z-10 block p-6 rounded-lg shadow-lg bg-color4 max-w-md flex justify-end">
                                <p className="text-gray-800 text-left">A custom dark theme for VS Code inspired by Monokai Pro theme available at <a className='underline underline-offset-1 decoration-color100 decoration-double' href="https://marketplace.visualstudio.com/items?itemName=sayantikag98.minimalist-theme" target="_blank" rel="noopener noreferrer">VS Code Marketplace</a>.</p>
                            </div>
                        </div>
                        <a target="_blank" rel='noopener noreferrer' href="https://minimalist-theme.vercel.app/"><Image src="/images/VS-Code-Theme.png" height={400} width={650} class="rounded-lg" alt="..." /></a>
                    </div>




                    <div id="project3"className="flex justify-center pt-16 pb-16 hover:bg-color18 rounded-lg">
                        <a target="_blank" rel='noopener noreferrer' href="http://my-imdb-clone.vercel.app/"><Image src="/images/IMDb-clone.png" height={400} width={650} class="rounded-lg" alt="..." /></a>
                        <div className='flex-col pt-8 mt-12'>
                            <h2 className="text-4xl font-medium leading-tight mt-0 mb-2 text-color69 flex justify-end">IMDb UI Clone</h2>
                            <div className="flex justify-end mb-3">
                                <a className="pl-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub link" href="https://github.com/sayantikag98/IMDb_Clone_With_HTML_and_CSS.git" target="_blank" rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                <a className="pl-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Website link" href="http://my-imdb-clone.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link"></i></a>
                            </div>
                            <div className="flex justify-end mb-3">
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-blue-400 text-white invisible rounded">Bootstrap</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color16 text-white invisible rounded pl-4 pr-4">Node</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color51 text-white invisible rounded pl-5 pr-5">Express</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color16 text-white rounded">HTML</span>
                                <span className="ml-2 text-sm inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-color95 text-white rounded">CSS</span>

                            </div>
                            <div className="absolute right-28 block p-6 rounded-lg shadow-lg bg-color4 max-w-md flex justify-end">
                                <p className="text-gray-800 text-right">IMDb UI clone made with only HTML and CSS with no framework being used.</p>
                            </div>
                        </div>
                        
                    </div>
                </section>
                   
            </main>
        </div>
    );
}