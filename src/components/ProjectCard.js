import { Link } from "react-router-dom";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const ProjectCard = (props)=>{
    getDownloadURL(ref(storage, props.imageBackground))
      .then((url) => {
    
        // Or inserted into an <img> element
        const img = document.getElementById('imageCard'+props.id);
        img.setAttribute('src', url);
      })
      .catch((error) => {
        console.log(error)
    })

    return (
        <Link key={props.id} to={"/projects/"+props.id} className={"h-48 w-48 m-10 md:w-36 md:h-36 rounded-3xl border-[1px] border-lightblue dark:border-lightorange"+(!props.iconsViewMode?" lg:m-0 lg:my-3 lg:w-full lg:mx-auto bg-white dark:bg-dark border-1 border-lightblue dark:border-lightorange flex justify-start items-center ":" border-1 border-lightblue overflow-hidden w-72")}>
            <img id={"imageCard"+props.id} alt="" className={"rounded-2xl "+(props.iconsViewMode?"h-full w-full ":"w-32 h-32 shadow-inner shadow-lightblue")}/>
            {props.iconsViewMode && <div className="relative">
                <div className="absolute bottom-0 rounded-2xl left-0 right-0 bg-gradient-to-t from-grey to-transparent h-64 flex flex-col justify-end items-start opacity-0 hover:opacity-100">
                    <div className="flex">{props.tags.map(tag=><div key={props.id} className="rounded-md py-1 px-2 text-xs bg-blue dark:bg-lightorange text-white ml-3 mb-1">{tag}</div>)}</div>
                    <h1 className="font-khulabold text-white text-xl ml-3 mb-2">{props.name}</h1>
                </div>
            </div>}

            {!props.iconsViewMode && <div className="relative ml-4 lg:w-full">
                <div className="lg:w-full">
                    <div className="flex">{props.tags.map((tag,i) =><div key={props.id+i} className="w-min rounded-md py-1 px-2 text-xs bg-blue dark:bg-lightorange text-white ml-3 mb-1">{tag}</div>)}</div>
                    <h1 className="font-martelbold text-grey dark:text-white text-xl ml-3 mb-2">{props.name}</h1>
                    <p className="font-khularegular text-lightgrey ml-3">{props.description}</p>
                </div>
            </div>}
        </Link>
    );
}

export default ProjectCard;