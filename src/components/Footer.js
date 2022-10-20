import { useSelector } from 'react-redux';
import { selectDarkTheme } from '../slices/themeSlice';

function Footer() {
  
  const darkTheme = useSelector(selectDarkTheme); 
  const twitterPath = process.env.PUBLIC_URL+(darkTheme?"/images/footer_darktwitter.png":"/images/footer_twitter.png");
  const instagramPath = process.env.PUBLIC_URL+(darkTheme?"/images/footer_darkinstagram.png":"/images/footer_instagram.png");
  const linkedinPath = process.env.PUBLIC_URL+(darkTheme?"/images/footer_darklinkedin.png":"/images/footer_linkedin.png");
  const githubPath = process.env.PUBLIC_URL+(darkTheme?"/images/footer_darkgithub.png":"/images/footer_github.png");
  const dribbblePath = process.env.PUBLIC_URL+(darkTheme?"/images/footer_darkdribbble.png":"/images/footer_dribbble.png");
  const behancePath = process.env.PUBLIC_URL+(darkTheme?"/images/footer_darkbehance.png":"/images/footer_behance.png");


  return (
	<div id="Footer" className="footer">
		<div className="flex justify-between w-full px-3 mb-3">

			<a href="https://twitter.com/NunzioonoDev" ><img src={twitterPath} alt="" className="footer_social_icon" /></a>

			<a href="https://www.instagram.com/nunzio.o/" ><img src={instagramPath} alt="" className="footer_social_icon"/></a>

			<a href="https://www.linkedin.com/in/nunzio-onorati-44b00015a/" ><img src={linkedinPath} alt="" className="footer_social_icon"/></a>

			<a href="https://github.com/nunzioono" ><img src={githubPath} alt="" className="footer_social_icon"/></a>

			<a href="https://dribbble.com/nunzioo" ><img src={dribbblePath} alt="" className="footer_social_icon"/></a>

			<a href="https://www.behance.net/nunzioonorati" ><img src={behancePath} alt="" className="footer_social_icon"/></a>

		</div>

		<div className="font-martelbold text-lightblue text-xl dark:text-lightorange">
			<span>© 2022 Nunzio Onorati. All rights reserved.</span>
		</div>
	</div>
  );
}

export default Footer;