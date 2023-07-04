import celular from '../../assets/celular.png'

export default function Contact() {
    return (
        <section>
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h3 className="text-center text-6xl text-white font-extrabold pb-10">Contactános</h3>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 h-36" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="font-bold text-md inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center text-white border border-blue-500 rounded-lg bg-blue-500 transform hover:scale-105">Send message</button>
                </form>
            </div>
        </section>
    );
}


