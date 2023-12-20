import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardList from '../components/CardList';
import BannerCard from '../components/BannerCard';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import CurvySection from '../components/CurvySection';
import hvac from "../img/diving.png";
import HeroBanner from '../components/HeroBanner';
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
//STYLING
import '../scss/pages/_home.scss';

//MUST USE A FAVICON.ICO AT THE ROOT OF THE APP DIRECTORY...
//update metadata in public index html 

function Contact() {
	return (
		<div className='home'>
			<Navbar />
			<FullPost
				url='URL for the post'
				type=''
				title='Contact'
				summary='Hours: Weekdays, day and evening hours are available.
				Location: 6069 Southwestern Blvd
				Hamburg, NY 14075
				'
				summary2='Phone: 716-235-1900
				Email: lifeisarthamburg@gmail.com'
				src={hvac}
				alt=''
				caption="Swimming in the ocean is not just spending time in the water; it's a therapeutic dance with the waves that rejuvenates both body and soul. (Digital water color painting)"
			/>
			<div className='inner-container'></div>
		
			<div className='flex1200'>
				<CardList
					index='text'
					title='More'
					body="We "
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll=''
					oll2=''
				></CardList>
				
				<Card
					index='text'
					title='More'
					body='Events '
					body2=''
				></Card>
					<Card
						index='text'
						title='More'
						body='more info'
						body2='more info'
					></Card>
			</div>

			<div className='flex1200'>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
