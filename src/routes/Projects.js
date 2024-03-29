import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../slices/themeSlice";
import ProjectCard from "../components/ProjectCard";

const Projects= () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => { 
        fetch("https://portfolio-server-as2q.onrender.com")
        .then(res=>res.json())
        .then(data=>setProjects(data.projects))
        .catch(err=>console.log(err))
    }, []);
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
    const searchPath = process.env.PUBLIC_URL+(darkMode?"/images/projects_darklens.png":"/images/projects_lens.png");
    const iconsPath = process.env.PUBLIC_URL+(darkMode?"/images/projects_darkicons.png":"/images/projects_icons.png");
    const itemsPath = process.env.PUBLIC_URL+(darkMode?"/images/projects_darkitems.png":"/images/projects_items.png");

    return (
        <div className="relative h-screen px-8 pt-8 flex flex-col dark:bg-dark lg:px-16 xl:px-32">
            <div className="flex flex-col justify-between mt-16 lg:w-full lg:px-2 lg:flex-row">
                <div className="w-full h-10 relative flex justify-end items-center mb-4 lg:w-min">
                    <input type="text" className="w-full h-10 rounded-xl p-2 border-2 font-cormorantbold text-lightblue border-lightblue bg-opacity-20 bg-lightblue outline-lightblue placeholder-lightblue
                      dark:text-lightorange dark:border-lightorange dark:bg-opacity-20 dark:bg-lightorange dark:outline-lightorange dark:placeholder-lightorange lg:w-48" placeholder="Search by name" onChange={(e)=>{
                        setSearched(e.currentTarget.value);
                      }}/>
                    <img src={searchPath} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2"/>
                </div>
                <div className="hidden relative h-10 rounded-xl border-2 border-lightblue bg-opacity-20 bg-lightblue overflow-clip dark:bg-lightorange dark:bg-opacity-20 dark:border-lightorange lg:flex lg:justify-between lg:w-[5rem] " onClick={
                    ()=>{setIconsViewMode(!iconsViewMode)}
                }>
                    <img src={iconsPath} alt="" className="p-1.5 mr-2 z-10 lg:mr-0"/>
                    <div className={"absolute top-0 bottom-0 h-full w-1/2 bg-darkblue z-0 transition-all dark:bg-orange "+(iconsViewMode?"left-0":"right-0")}></div>
                    <img src={itemsPath} alt="" className="p-1.5 z-10 lg:mr-0"/>
                </div>
                <select className="h-10 px-2 bg-lightblue bg-opacity-20 rounded-xl border-2 border-lightblue
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
            <div className={"flex flex-1 mt-8 overflow-y-scroll border-2 border-blue bg-lightblue dark:bg-lightorange bg-opacity-20 dark:bg-opacity-20 dark:border-lightorange rounded-xl p-2 mb-14 "+(!iconsViewMode?"justify-start flex-col items-start":"flex-wrap ")}>
                {
                    projects!==undefined && projects
                    .filter((proj)=>{
                        return proj.name.toLowerCase().includes(searched.toLowerCase()) && 
                        (Object.keys(filters).filter(filterkey=>filters[filterkey])[0]===undefined || proj.tags.indexOf(Object.keys(filters).filter(filterkey=>filters[filterkey])[0])!==-1)
                    })
                    .map((proj,i)=>{
                        return (
                        <ProjectCard
                            key={proj.id}  
                            id={proj.id} 
                            iconsViewMode={iconsViewMode} 
                            name={proj.name} 
                            description={proj.description} 
                            tags={proj.tags}
                            imageBackground={proj.imageBackground}
                            githubLink={proj.githubLink}
                        />
                        )
                    })
                }
                
            </div>
        </div>

    );
}

export default Projects