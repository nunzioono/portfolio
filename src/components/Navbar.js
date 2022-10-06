import '../output.css';
import { Link, useLocation } from 'react-router-dom';

function Switch(props) {
	const [darkTheme,setDarkTheme]= props;

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
			console.log(darkTheme);
			setDarkTheme(!darkTheme);
		}}>
			
			<img src={(darkTheme?process.env.PUBLIC_URL+'/svgs/navbar_moondark.svg':process.env.PUBLIC_URL+'/svgs/navbar_moon.svg')} alt="" className={(darkTheme?'hidden ':'')+'h-8 '} />

			<img src={(darkTheme?process.env.PUBLIC_URL+'/svgs/navbar_sundark.svg':process.env.PUBLIC_URL+'/svgs/navbar_sun.svg')} alt="" className={(!darkTheme?'hidden ':'')+'h-8 '}/>			

		</div>
	);
}


function Navbar(props) {
  const [darkTheme]= props;
  console.log(darkTheme?"dark":"light");
  const path=useLocation().pathname;

  return (
    <div className="navbar">

		<div className="flex flex-row justify-between items-center" >

			<img src={process.env.PUBLIC_URL+'/svgs/navbar_logo.svg'} alt="" className="h-8 mr-8"/>

			<div className={"nav "+(path==="/"?"active":"")}>
				<Link to={"/"}>Home</Link>
			</div>

			<div className={"nav "+(path==="/contacts"?"active":"")}>
				<Link to={"/contacts"}>Contacts</Link>
			</div>

			<div className={"nav "+(path==="/projects"?"active":"")}>
				<Link to={"/projects"}>Projects</Link>
			</div>

		</div>

		<div className="settings flex">

			<Switch props={props} />

			<img src={darkTheme?process.env.PUBLIC_URL+'/svgs/navbar_userlogindark.svg':process.env.PUBLIC_URL+'/svgs/navbar_userlogin.svg'} alt="" className='h-8 ml-8' />
			
		</div>

	</div>
  );
}

export default Navbar;