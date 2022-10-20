import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	invert,
  	selectDarkTheme,
} from '../slices/themeSlice.js';

function Switch() {
	const darkTheme = useSelector(selectDarkTheme);
	const dispatch = useDispatch();
	const moonPath = darkTheme?process.env.PUBLIC_URL+'/images/navbar_moondark.png':process.env.PUBLIC_URL+'/images/navbar_moon.png';
	const sunPath = darkTheme?process.env.PUBLIC_URL+'/images/navbar_sundark.png':process.env.PUBLIC_URL+'/images/navbar_sun.png';

	return (
		<div id="switch" className="switch h-[2rem]" onClick={()=>{
			// On page load or when changing themes, best to add inline in `head` to avoid FOUC
			if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}

			// Whenever the user explicitly chooses light mode
			localStorage.theme = darkTheme?'dark':'light';
			dispatch(invert());
		}}>
			
			<img src={moonPath} alt="" className={(darkTheme?'hidden ':'')+'h-6 '} />

			<img src={sunPath} alt="" className={(!darkTheme?'hidden ':'')+'h-6 '}/>			

		</div>
	);
}


function Navbar() {
  const path=useLocation().pathname;
  const darkTheme = useSelector(selectDarkTheme); 
  const logoPath = darkTheme?process.env.PUBLIC_URL+'/images/navbar_logodark.png':process.env.PUBLIC_URL+'/images/navbar_logo.png';
  const userLoginPath = darkTheme?process.env.PUBLIC_URL+'/images/navbar_userlogindark.png':process.env.PUBLIC_URL+'/images/navbar_userlogin.png';
  
  return (
    <div className="navbar z-50">
		<div className='flex justify-between items-center'>
			<div className='h-5 w-6 flex flex-col justify-between outline-lightblue' onClick={
					()=>{
						const mobilemenu= document.getElementById("mobile-menu");
						if(mobilemenu.classList.contains("hidden")){
							mobilemenu.classList.remove("hidden")
						}
						else{
							mobilemenu.classList.add("hidden")
						}
					}
				}>
				<span className='w-full h-1 rounded bg-lightblue dark:bg-lightorange'></span>
				<span className='w-full h-1 rounded bg-lightblue dark:bg-lightorange'></span>
				<span className='w-full h-1 rounded bg-lightblue dark:bg-lightorange'></span>
			</div>
			


			<div className="hidden flex flex-row justify-between items-center" >

				<img src={logoPath} alt="" className="hidden h-8 mr-8"/>

				<div className={"nav "+((path==="/" || path==="/home")?"active":"")}>
					<Link to={"/"}>Home</Link>
				</div>

				<div className={"nav "+(path==="/contacts"?"active":"")}>
					<Link to={"/contacts"}>Contacts</Link>
				</div>

				<div className={"nav "+(path==="/projects"?"active":"")}>
					<Link to={"/projects"}>Projects</Link>
				</div>

			</div>

			<img src={logoPath} alt="" className="h-6"/>

			<div className="hidden settings flex">

				<Switch />

				<img src={userLoginPath} alt="" className='h-8 ml-8' />
				
			</div>
			<img src={userLoginPath} alt="" className='h-6' />

		</div>
		<div id='mobile-menu' className='hidden flex flex-col justify-between mt-8'>
			<Switch />
			<div className={"nav "+((path==="/" || path==="/home")?"active":"")}>
				<Link to={"/"}>Home</Link>
			</div>

			<div className={"nav "+(path==="/contacts"?"active":"")}>
				<Link to={"/contacts"}>Contacts</Link>
			</div>

			<div className={"nav "+(path==="/projects"?"active":"")}>
				<Link to={"/projects"}>Projects</Link>
			</div>
		</div>
	</div>
  );
}

export default Navbar;