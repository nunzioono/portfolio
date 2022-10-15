import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  	selectDarkTheme,
} from '../slices/themeSlice.js';

function Home() {
  const darkTheme = useSelector(selectDarkTheme); 
  const profilePath = process.env.PUBLIC_URL+"/images/home_body1_leftside_profile.png";
  const rightBodyPath = process.env.PUBLIC_URL+"/images/home_body1_rightside_show1.png";
  const rightBodyPath2 = process.env.PUBLIC_URL+"/images/home_body1_rightside_show2.png";
  const rightBodyPath3 = process.env.PUBLIC_URL+"/images/home_body1_rightside_show3.png";
  const rightBodyPath4 = process.env.PUBLIC_URL+"/images/home_body1_rightside_show4.png";
  const shadowPath = process.env.PUBLIC_URL+(darkTheme?"/images/home_body1_rightside_darkshadow.png":"/images/home_body1_rightside_shadow.png");
  const mapPath = process.env.PUBLIC_URL+(darkTheme?'/images/home_body2_leftside_darkmap.png':'/images/home_body2_leftside_map.png');
  const indicatorPath = process.env.PUBLIC_URL+(darkTheme?"/images/home_body2_rightside_darkindicator.png":"/images/home_body2_rightside_indicator.png")

  return (
    <div className="home w-full mt-18 px-24 z-10 dark:bg-dark">

		<div className="body1 h-screen w-full flex">
			<div className="left_body h-screen w-1/3 flex flex-col justify-center translate-y-[-3rem]">

				<img src={profilePath} alt="" className="w-12 h-12 rounded-full mb-12"/>
				<div>
					<div className="text-6xl font-martelbold text-semilightgrey mb-10 dark:text-white">
						A software <span className="text-blue dark:text-lightorange">engineer</span> that <span className="text-blue dark:text-lightorange">designs</span> and <span className="text-blue dark:text-lightorange">developes</span> things
					</div>
					<div className="font-khularegular text-xl text-lightgrey w-full mb-10 dark:text-lightgrey">
						<span>Hi i'm Nunzio, a software engineer based in Italy. I've degreed in 2023 and growing my interest for design since that.</span>
					</div>
					<Link to="/contacts" className="w-full font-martelbold text-white text-center text-xl rounded-lg bg-lightblue hover:bg-blue px-52 py-3 cursor-pointer dark:bg-lightorange dark:hover:bg-orange">
						Contact me
					</Link>
				</div>
					
			</div>
			<div className="relative right_body h-screen w-2/3 flex justify-center items-center">

				<img src={shadowPath} alt="" className='absolute w-66 w-66 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'/>

				<div className='h-min z-10'>

					<div className='flex'>

						<img src={rightBodyPath} alt="" className='home_show -mr-8 z-40'/>
							
						<img src={rightBodyPath2} alt="" className='home_show z-30'/>

					</div>
						
					<div className='flex z-0 -mt-8'>
					
						<img src={rightBodyPath3} alt="" className='home_show -mr-8 z-30'/>
							
						<img src={rightBodyPath4} alt="" className='home_show z-20'/>	
					
					</div>

				</div>

			</div>
			
		</div>

        <div className='body2 h-screen w-full flex justify-between items-center  dark:bg-dark'>
			
			<div className='left_body flex justify-start'>
				<img src={mapPath} alt='' className='h-[48rem] w-auto' />
			</div>
			
			<div className='right_body w-1/2 flex justify-end'>

				<div className='h-[48rem] w-[36rem] flex flex-col justify-between items-center'>
					<div id="Step1">
						<div className='flex flex-col justify-center items-center'>
							<div className='home_body2_title'>
								Born in Foggia, stayed there till 18
							</div>
							<div className='home_body2_desc'>
								<span>I'm originary from foggia, i'm born and i still have my family here</span>
							</div>
							
						</div>
					</div>
	
					<div id="Step2">
						<div className='flex flex-col justify-center items-center'>
							<div className='home_body2_title'>
								<span>Transfered to Turin</span>
							</div>
							<div className='home_body2_desc'>
								<span>I moved here for study at the age of 18 alone, got the software engineering degree at the Politecnich of Turin</span>
							</div>
						</div>
					</div>

					<div id="Step3">
						<div className='flex flex-col justify-center items-center'>
							<div className='home_body2_title'>
								<span>Getting to work</span>
							</div>
							<div className='home_body2_desc'>
								<span>I've worked for … for a long time and i'm exploring new possibilities, contact me if interested in work toghether!</span>
							</div>	
						</div>
					</div>				
				</div>

				<img src={indicatorPath} alt="" className='ml-16' />

			</div>

		</div>
		
	</div>
  );

}

export default Home;