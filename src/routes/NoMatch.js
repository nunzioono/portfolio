const NoMatch= () => {
    return (
        <div className="relative h-screen px-24 mt-[5.75rem] flex justify-center items-center dark:bg-dark">
            <div className="flex flex-col justify-between">
                <h1 className="font-cormorantbold text-center text-9xl text-lightblue dark:text-lightorange">404</h1>
                <p className="font-cormorantregular text-center text-5xl text-grey dark:text-white">We are sorry, it seems the page do not belong to this website</p>
            </div>
        </div>
    );
}

export default NoMatch;