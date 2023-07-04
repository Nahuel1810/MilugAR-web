import celular from '../../assets/celular.png'

export default function Aboutus() {
    return (
        <section className='h-screen'>
            <h3 className='text-center text-6xl text-white font-extrabold py-16'>Increibles caracteristicas</h3>
            <div className=" flex items-center justify-center">
                <img src={celular} className='h-1/3' />
                <div class="flex flex-col bg-white w-5/12 h-64 p-4 rounded-3xl shadow-2xl shadow-gray-800/10">
                    <div class="flex flex-col flex-1 p-2">
                        <div class="flex flex-col flex-1 gap-3 text-gray-500">
                            <h3 className='text-2xl font-semibold text-gray-800'>Title</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <div class="flex gap-3 mt-auto">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


