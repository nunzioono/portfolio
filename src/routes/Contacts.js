const Contacts= () => {

    return (
        <div className="h-screen mt-[5rem] px-24 dark:bg-dark">
            <h1 className="font-martelbold text-4xl text-grey text-start pt-16 mb-16 dark:text-white">Get in touch!</h1>
            <div className="content flex flex-row justify-center items-center">
                <form className="left-side w-1/2 h-full pr-56 flex flex-col justify-start items-start">
                    <h2 className="font-martelbold text-3xl text-grey mb-8 dark:text-white">Write me your idea:</h2>
                    <div className="w-full">
                        <div className="w-full flex mb-8">
                            <div className="flex-1 mr-8">
                                <p className="font-khulabold text-lg text-lightblue dark:text-lightorange">Name</p>
                                <input id="sendername" type="text" className="w-full h-10 p-4 rounded-xl bg-opacity-20 border-2 text-lightblue bg-lightblue border-lightblue placeholder:text-lightblue focus-visible:outline-blue dark:text-lightorange dark:bg-lightorange dark:border-lightorange dark:placeholder:text-lightorange dark:focus-visible:outline-orange dark:bg-opacity-20" placeholder="Type the name"/>
                            </div>
                            <div className="flex-1">
                                <p className="font-khulabold text-lg text-lightblue dark:text-lightorange" required>Email</p>
                                <input id="senderemail" type="email" className="w-full h-10 p-4 rounded-xl bg-opacity-20 border-2 text-lightblue bg-lightblue border-lightblue placeholder:text-lightblue focus-visible:outline-blue dark:text-lightorange dark:bg-lightorange dark:border-lightorange dark:placeholder:text-lightorange dark:focus-visible:outline-orange dark:bg-opacity-20" placeholder="Type the email" pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"/>
                            </div>
                        </div>
                        <div className="w-full h-full mb-8">
                            <p className="font-khulabold text-lg text-lightblue dark:text-lightorange" required>Message</p>
                            <textarea id="sendermessage" className="w-full h-full p-4 rounded-xl bg-opacity-20 border-2 text-lightblue bg-lightblue border-lightblue placeholder:text-lightblue focus-visible:outline-blue dark:text-lightorange dark:bg-lightorange dark:border-lightorange dark:placeholder:text-lightorange dark:focus-visible:outline-orange dark:bg-opacity-20" placeholder="Type the message"/>
                        </div>
                    </div>
                    <button className="w-full py-2 px-32 rounded-xl font-khulabold text-white bg-lightblue hover:bg-blue dark:bg-lightorange dark:hover:bg-orange">Send message</button>
                </form>
                <div className="separator flex flex-col items-center">
                    <div className="w-1 h-52 mb-8 rounded bg-lightblue dark:bg-lightorange"></div>
                    <p className="font-martelbold text-3xl text-center dark:text-white">OR</p>
                    <div className="w-1 h-52 mt-8 rounded bg-lightblue dark:bg-lightorange"></div>
                </div>
                <div className="right-side pl-56  w-1/2 flex flex-col justify-start items-start">
                    <h3 className="font-martelbold text-3xl text-grey mb-8 dark:text-white">Reach me on my contacts:</h3>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.8677461982957!2d15.551600315657607!3d41.46378369921818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1339d85c06f435a3%3A0xa599dfedb7f5f68!2sViale%20XXIV%20Maggio%2C%2043%2C%2071121%20Foggia%20FG!5e0!3m2!1sit!2sit!4v1665401802691!5m2!1sit!2sit" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl border-2 border-lightblue dark:border-lightorange mb-4" />
                    <p className="text-lightgrey dark:text-lightorange">Email: nunzioonorati@gmail.com</p>
                    <p className="text-lightgrey dark:text-lightorange">Address: Viale XXIV Maggio 43, Foggia, Italy</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts