import React from 'react';
import { Link } from 'react-router-dom';
import hvac from "../img/lifeIsArtPllc.png"

//STYLING
import '../scss/components/_footer.scss';

//IMGS
import Logo from '../components/assets/logo.png';

const Footer = () => {
	return (
		<>
			<footer>
				<div className='main-footer inner-container'>
					<div className='footer-one'>
						<div>
							{/* <h3>Address</h3> */}
							<p>6069 Southwestern Blvd</p>
							<p>Hamburg, NY 14075</p>
						</div>
						<div>
							<p>
								<a href='tel:7162351900'>716-235-1900</a>
							</p>
							<p>
								<a href='mailto:lifeisarthamburg@gmail.com'>lifeisarthamburg@gmail.com</a>
							</p>
							<p>Web design by <a href='https://azurejames.com/portfolio/'>Azure James</a></p>
						</div>
						{/* <ul>
							<li className='nav-item'>
								<Link to='/' className='nav-links'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/contact'>Contact Us</Link>
							</li>
						</ul> */}

					</div>
					<div className='footer-two' style={{marginTop: '20px'}}>
						{/* <q style={{fontSize: '16px', paddingBlock: '1rem', display: 'block'}}>A society grows great when old men plant trees in whose shade they shall never sit.</q><cite style={{fontSize: '16px', paddingBlock: '1rem'}}> -Greek Proverb</cite> */}
						<h3>heading</h3>
						<div >
							<a href='/'>
								<img src={hvac} alt='Placeholder logo' style={{width: '19	0px', height: "auto"}} />
							</a>
						</div>						
					</div>
				</div>

				{/* <div className='secondary-footer'>
					<p className='copyright'>©{new Date().getFullYear()} REACT-BASE</p>
				</div> */}
			</footer>
		</>
	);
};

export default Footer;
