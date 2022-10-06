import { ReactComponent as Logo } from '../svgs/navbar_logo.svg';
import { ReactComponent as Moon } from '../svgs/navbar_moon.svg';
import { ReactComponent as Sun } from '../svgs/navbar_sun.svg';
import { ReactComponent as UserLogin } from '../svgs/navbar_userlogin.svg';
import '../output.css';
import { useState } from 'react'

function Switch() {
	const [darkTheme,setDarkTheme]=useState(false);

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

			<Moon height="2rem" className={darkTheme?'hidden':''} />

			<Sun height="2rem" className={!darkTheme?'hidden':''}/>			

		</div>
	);
}


function Navbar() {

  return (
    <div id="Navbar" className="fixed top-0 left-0 right-0 flex justify-between px-24 py-2 dark:bg-slate-800">

		<div className="flex flex-row justify-between w-1/3" >

			<Logo height="2rem"/>

			<div className="bg-black dark:bg-orange-700 rounded">
				Home
			</div>

			<div className="">
				Contacts
			</div>

			<div className="">
				Projects
			</div>

		</div>

		<div className="settings flex">

			<Switch />

			<UserLogin height="2rem" />
			
		</div>

	</div>
  );
}

export default Navbar;