import mdp from '../../assets/mdp.jpg'
import celular from '../../assets/celular.png'
import './Hero.css'
export default function Hero() {
    return (
        <section className=" h-screen flex justify-start items-center" style={{ backgroundImage: `url(${mdp})` }}>
            <div className="max-w-screen-xl ml-16">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Tu aplicación móvil para encontrar estacionamiento</h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">'From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.'</p>
                    <a href="#" className="font-bold text-xl inline-flex items-center justify-center px-8 py-4 mr-3 text-base font-medium text-center text-slate-800 rounded-lg bg-white transform hover:scale-105 focus:ring-4 focus:ring-primary-300">
                        Leer más
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="font-bold text-xl inline-flex items-center justify-center px-8 py-4 text-base font-medium text-center text-white border border-blue-500 rounded-lg bg-blue-500 transform hover:scale-105">
                        Descarga
                    </a>
                </div>
                <div>
                    <img src={celular} className='phoneImg' />
                </div>
            </div>
        </section>
    );
}
