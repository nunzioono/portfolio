import { useState } from "react";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../slices/themeSlice";
import { Link } from "react-router-dom";


const Project = (props)=>{
    return (
        <Link key={props.id.toString()} to={"/projects/"+props.id} className={"h-64 m-10 rounded-3xl border-[1px] border-lightblue dark:border-lightorange"+(!props.iconsViewMode?" w-11/12 mx-auto bg-white dark:bg-dark border-1 border-lightblue dark:border-lightorange flex justify-start items-center ":" border-1 border-lightblue overflow-hidden w-72")}>
            <img src={props.imageBackground} alt="" className={"rounded-2xl "+(props.iconsViewMode?"h-full w-full ":"w-72 h-56 ml-4 shadow-inner shadow-lightblue")}/>
            {props.iconsViewMode && <div className="relative">
                
                <div className="absolute bottom-0 rounded-2xl left-0 right-0 bg-gradient-to-t from-grey to-transparent h-64 flex flex-col justify-end items-start opacity-0 hover:opacity-100">
                    <div className="flex">{props.tags.map(tag=><div className="rounded-md py-1 px-2 text-xs bg-blue dark:bg-lightorange text-white ml-3 mb-1">{tag}</div>)}</div>
                    <h1 className="font-khulabold text-white text-xl ml-3 mb-2">{props.name}</h1>
                </div>
            </div>}

            {!props.iconsViewMode && <div className="relative">
                
                <div className="">
                    <div className="flex">{props.tags.map(tag=><div className="w-min rounded-md py-1 px-2 text-xs bg-blue dark:bg-lightorange text-white ml-3 mb-1">{tag}</div>)}</div>
                    <h1 className="font-martelbold text-grey dark:text-white text-xl ml-3 mb-2">{props.name}</h1>
                    <p className="font-khularegular text-lightgrey ml-3">{props.description}</p>
                </div>
            </div>}
        </Link>
    );
}

const Projects= () => {
    const projects = [
        {
            id: 1,
            name: "Focus Consulting srl",
            description: "Applicazione web per un'azienda ingegneristica di consulenza",
            tags: ["Web"],
            imageBackground: "/images/home_body1_rightside_show1.png"
        },
        {
            id: 2,
            name: "Focus Consulting srl",
            description: "Applicazione web per un'azienda ingegneristica di consulenza",
            tags: ["Mobile"],
            imageBackground: "/images/home_body1_rightside_show1.png"
        },
        {
            id: 3,
            name: "bro bravo",
            description: "Applicazione web per un'azienda ingegneristica di consulenza",
            tags: ["Desktop"],
            imageBackground: "/images/home_body1_rightside_show1.png"
        },
    ]

    const [ iconsViewMode, setIconsViewMode ] = useState(true);
    const [ searched, setSearched ] = useState("");
    const [ filters, setFilters ] = useState({
        Desktop: false,
        Mobile: false,
        Web: false,
        Backend: false,
        Full: false
    });
    const darkMode = useSelector(selectDarkTheme);
    const searchPath = process.env.PUBLIC_URL+(darkMode?"/images/darklens.png":"/images/lens.png");
    const iconsPath = process.env.PUBLIC_URL+(darkMode?"/images/darkicons.png":"/images/icons.png");
    const itemsPath = process.env.PUBLIC_URL+(darkMode?"/images/darkitems.png":"/images/items.png");

    return (
        <div className="relative h-screen px-24 mt-[5.75rem] flex flex-col dark:bg-dark">
            <div className="controls flex justify-between mt-16">
                <div className="searchbar relative flex justify-end items-center">
                    <input type="text" className="w-64 h-10 rounded-xl p-2 border-2 font-cormorantbold text-lightblue border-lightblue bg-opacity-20 bg-lightblue outline-lightblue placeholder-lightblue
                      dark:text-lightorange dark:border-lightorange dark:bg-opacity-20 dark:bg-lightorange dark:outline-lightorange dark:placeholder-lightorange" placeholder="Search by name" onChange={(e)=>{
                        setSearched(e.currentTarget.value);
                      }}/>
                    <img src={searchPath} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2"/>
                </div>
                <div className="relative h-10 rounded-xl border-2 border-lightblue bg-opacity-20 bg-lightblue flex overflow-clip dark:bg-lightorange dark:bg-opacity-20 dark:border-lightorange " onClick={
                    ()=>{setIconsViewMode(!iconsViewMode)}
                }>
                    <img src={iconsPath} alt="" className="p-1.5 mr-2 after:w-1/2 z-10"/>
                    <div className={"absolute top-0 bottom-0 h-full w-1/2 bg-darkblue z-0 transition-all dark:bg-orange "+(iconsViewMode?"left-0":"right-0")}></div>
                    <img src={itemsPath} alt="" className="p-1.5 z-10"/>
                </div>
                <select className="px-2 bg-lightblue bg-opacity-20 rounded-xl border-2 border-lightblue
                 outline-blue appearance-none font-cormorantbold text-lightblue
                 dark:bg-lightorange dark:bg-opacity-20 dark:border-lightorange dark:outline-lightorange dark:text-lightorange
                 " onChange={(e)=>{
                    const optionIndex = Number(e.target.value);
                    switch(optionIndex){
                        case 0:
                            setFilters({
                                Desktop:false,
                                Mobile:false,
                                Web:false,
                                Backend:false,
                                Full:false,
                            })
                            break;
                        case 1:
                            setFilters({
                                Desktop:true,
                                Mobile:false,
                                Web:false,
                                Backend:false,
                                Full:false,
                            })
                            break;
                        case 2:
                            setFilters({
                                Desktop:false,
                                Mobile:true,
                                Web:false,
                                Backend:false,
                                Full:false,
                            })
                            break;
                        case 3:
                            setFilters({
                                Desktop:false,
                                Mobile:false,
                                Web:true,
                                Backend:false,
                                Full:false,
                            })
                            break;
                        case 4:
                            setFilters({
                                Desktop:false,
                                Mobile:false,
                                Web:false,
                                Backend:true,
                                Full:false,
                            })
                            break;
                        case 5:
                            setFilters({
                                Desktop:false,
                                Mobile:false,
                                Web:false,
                                Backend:false,
                                Full:true,
                            })
                            break;
                        default:
                            setFilters({
                                Desktop:false,
                                Mobile:false,
                                Web:false,
                                Backend:false,
                                Full:false,
                            })
                            break;                    }
                 }}>
                    <option value={0}>All the projects</option>
                    <option value={1}>Desktop</option>
                    <option value={2}>Mobile</option>
                    <option value={3}>Web</option>
                    <option value={4}>Backend (DB and Services)</option>
                    <option value={5}>Full</option>
                </select>
            </div>
            <div className={"projects flex flex-1 mt-8 overflow-y-scroll border-2 border-blue bg-lightblue dark:bg-lightorange bg-opacity-20 dark:bg-opacity-20 dark:border-lightorange rounded-xl p-2 mb-5 "+(!iconsViewMode?"justify-start flex-col ":"")}>
                {
                    projects
                    .filter((proj)=>{
                        console.log(Object.keys(filters).filter(filterkey=>filters[filterkey]))
                        
                        return proj.name.toLowerCase().includes(searched.toLowerCase()) && 
                        (Object.keys(filters).filter(filterkey=>filters[filterkey])[0]===undefined || proj.tags.indexOf(Object.keys(filters).filter(filterkey=>filters[filterkey])[0])!==-1)
                    })
                    .map((proj)=>{return (
                        <Project  
                            id={proj.id} 
                            iconsViewMode={iconsViewMode} 
                            name={proj.name} 
                            description={proj.description} 
                            tags={proj.tags} 
                            imageBackground={proj.imageBackground}
                        />
                        )
                    })
                }
                
            </div>
        </div>

    );
}

export default Projects