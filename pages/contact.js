import Head from '../components/Headfunc'
import Header from '../components/Header'

export default function Contact(){
    return (
        <div className='bg-color101 min-h-screen'>
            <Head title="Contact me"></Head>
            <Header></Header>
            <main className='pl-10 pr-10'>
                <h1 className="text-5xl pt-24 pb-8">
                    Contact Me
                </h1>
                <div className="ml-auto mr-auto block p-6 rounded-lg shadow-lg bg-color4 max-w-md">
                    <form action='mailto:sayantikaghosh98@gmail.com' method='GET'>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Name"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                placeholder="Email address"/>
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Subject"/>
                        </div>
                        <div className="form-group mb-6">
                            <textarea
                            className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message"
                            ></textarea>
                        </div>
                        <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        bg-color38
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Send Message</button>
                    </form>
                </div>

                   
            </main>
        </div>
    );
}