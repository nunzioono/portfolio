const Contacts= () => {

    const sendEmail = async () => {
        const name = document.getElementById("sendername").value;
        const from = document.getElementById("senderemail").value;
        const message = document.getElementById("sendermessage").value;

        fetch((process.env.REACT_APP_ENV=="PRODUCTION"?"https://portfolio-server-as2q.onrender.com":"http://localhost:3000")+"/send-email",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, from, message })
        })

        document.getElementById("sendername").value="";
        document.getElementById("senderemail").value="";
        document.getElementById("sendermessage").value="";
    }

    return (
        <div className="pt-22  px-8 dark:bg-dark lg:px-16 xl:px-32">
            <h1 className="font-martelbold text-4xl text-grey text-start pt-24 mb-16 dark:text-white">Get in touch!</h1>

            <div className="content flex flex-col justify-center items-start lg:flex-row">
                <form className="h-screen w-full flex flex-col justify-start items-start lg:mr-4">
                    <h2 className="font-martelbold text-3xl text-grey mb-8 dark:text-white">Write me your idea:</h2>
                    <div className="w-full">
                        <div className="w-full flex mb-8">
                            <div className="flex-1 mr-8">
                                <p className="font-khulabold text-lg text-lightblue dark:text-lightorange">Name</p>
                                <input id="sendername" type="text" className="w-full h-10 p-4 rounded-xl bg-opacity-20 border-2 text-lightblue bg-lightblue border-lightblue placeholder:text-lightblue placeholder:text-xs focus-visible:outline-blue dark:text-lightorange dark:bg-lightorange dark:border-lightorange dark:placeholder:text-lightorange dark:focus-visible:outline-orange dark:bg-opacity-20" placeholder="Type the name"/>
                            </div>
                            <div className="flex-1">
                                <p className="font-khulabold text-lg text-lightblue dark:text-lightorange" required>Email</p>
                                <input id="senderemail" type="email" className="w-full h-10 p-4 rounded-xl bg-opacity-20 border-2 text-lightblue bg-lightblue border-lightblue placeholder:text-lightblue placeholder:text-xs focus-visible:outline-blue dark:text-lightorange dark:bg-lightorange dark:border-lightorange dark:placeholder:text-lightorange dark:focus-visible:outline-orange dark:bg-opacity-20" placeholder="Type the email" pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"/>
                            </div>
                        </div>
                        <div className="w-full h-full mb-8">
                            <p className="font-khulabold text-lg text-lightblue dark:text-lightorange" required>Message</p>
                            <textarea id="sendermessage" className="w-full h-64 p-4 rounded-xl bg-opacity-20 border-2 text-lightblue bg-lightblue border-lightblue placeholder:text-lightblue placeholder:text-base focus-visible:outline-blue dark:text-lightorange dark:bg-lightorange dark:border-lightorange dark:placeholder:text-lightorange dark:focus-visible:outline-orange dark:bg-opacity-20" placeholder="Type the message"/>
                        </div>
                    </div>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        sendEmail();
                    }} className="w-full py-1 px-20 rounded-xl text-xl font-khulabold text-white text-center bg-lightblue hover:bg-blue dark:bg-lightorange dark:hover:bg-orange">Send message</button>
                </form>
                <div className="hidden w-full flex-row justify-between items-center lg:flex lg:flex-col">
                    <div className="w-48 h-1 rounded bg-lightblue dark:bg-lightorange lg:w-1 lg:h-48 lg:mb-4"></div>
                    <p className="font-martelbold text-3xl text-center dark:text-white">OR</p>
                    <div className="w-48 h-1 rounded bg-lightblue dark:bg-lightorange lg:w-1 lg:h-48 lg:mt-4"></div>
                </div>
                <div className="h-screen right-side w-full flex flex-col justify-start items-start">
                    <h3 className="font-martelbold text-3xl text-grey mb-8 dark:text-white">Reach me on my contacts:</h3>
                    
                    <iframe  className="w-full rounded-xl border-2 border-lightblue dark:border-lightorange mb-4"  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.7751204812625!2d16.8869819156497!3d41.117602120638566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e83f813aa1f3%3A0xd1ab50600b4a6c89!2sVia%20Giuseppe%20di%20Vagno%2C%203%2C%2070126%20Bari%20BA!5e0!3m2!1sit!2sit!4v1679682935860!5m2!1sit!2sit" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p className="text-lightgrey dark:text-lightorange">Email: nunzioonorati@gmail.com</p>
                    <p className="text-lightgrey dark:text-lightorange">Address: Via Giuseppe di Vagno 3, Bari, Italy</p>

                </div>
            </div>
        </div>
    );
}

export default Contacts