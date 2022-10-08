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
    <div className="home h-screen w-full mt-18 px-24 z-10 dark:bg-dark">

		<div className="body1 h-screen w-full flex">
			<div className="left_body h-screen w-1/3 flex flex-col justify-center translate-y-[-3rem]">

				<img src={profilePath} alt="" className="w-12 rounded-full mb-12"/>
				<div>
					<div className="text-6xl font-martelbold text-semilightgrey mb-10 dark:text-white">
						A software <span className="text-blue dark:text-lightorange">designer</span> and <span className="text-blue dark:text-lightorange">developer</span> with a dream
					</div>
					<div className="font-khularegular text-semilightgrey w-full mb-10 dark:text-darkgrey">
						<span>Hi i'm Nunzio, a software engineer based in Italy. I've degreed in 2023 and growing my interest for design since that.</span>
					</div>
					<Link to="/contacts" className="w-full font-martelbold text-white text-center text-lg rounded-lg bg-lightblue hover:bg-blue px-52 py-3 cursor-pointer dark:bg-lightorange dark:hover:bg-orange">
						Contact me
					</Link>
				</div>
					
			</div>
			<div className="relative right_body h-screen w-2/3 flex justify-center">

				<img src={shadowPath} alt="" className='absolute w-66 w-66 top-[15%] left-1/4 z-0'/>

				<div className='h-min ml-[6rem] mt-[8.5rem] z-10'>

					<div className='flex'>

						<img src={rightBodyPath} alt="" className='mr-[-8rem] hover:scale-125'/>
							
						<img src={rightBodyPath2} alt="" className=''/>

					</div>
						
					<div className='flex mt-[-8rem] z-0'>
					
						<img src={rightBodyPath3} alt="" className='mr-[-8rem] transition-transform hover:scale-125 hover:rotate-[-18deg]'/>
							
						<img src={rightBodyPath4} alt="" className=''/>	
					
					</div>

				</div>

			</div>
			
		</div>

        <div className='body2 h-screen w-full flex justify-center items-center'>
			
			<div className='left_body w-1/3'>
				<img src={mapPath} alt='' />
			</div>
			
			<div className='right_body w-2/3 flex justify-real-end'>

				<div className='flex flex-col justify-center items-center'>
					<div id="Step1">
						<div className='flex flex-col justify-center items-center'>
							<div className='font-martelbold text-grey text-5xl'>
								Born in Foggia, stayed there till 18
							</div>
							<div className='font-martelbold text-grey text-4xl'>
								<span>I'm originary from foggia, i'm born and i still have my family here</span>
							</div>
							
						</div>
					</div>
	
					<div id="Step2">
						<div className='flex flex-col justify-center items-center'>
							<div className='font-martelbold text-grey text-4xl'>
								<span>Transfered to Turin</span>
							</div>
							<div className='font-martelbold text-grey text-4xl'>
								<span>I moved here for study at the age of 18 alone, got the software engineering degree at the Politecnich of Turin</span>
							</div>
						</div>
					</div>

					<div id="Step3">
						<div className='flex flex-col justify-center items-center'>
							<div className='font-martelbold text-grey text-4xl'>
								<span>Getting to work</span>
							</div>
							<div className='font-martelbold text-grey text-4xl'>
								<span>I've worked for … for a long time and i'm exploring new possibilities, contact me if interested in work toghether!</span>
							</div>	
						</div>
					</div>				
				</div>

				<img src={indicatorPath} alt="" className='h-[100rem]' />

			</div>

		</div>
		
	</div>
  );

}

export default Home;