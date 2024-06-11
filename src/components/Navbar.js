import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hvac from "../img/lifeIsArtPllc.jpg"

//styles
import '../scss/components/_navbar.scss';

//logo
import Logo from '../components/assets/logo.png';

function Navbar(props) {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			{/* props.classname on navbar if we want to add any specific styling to the navbar on a certain page. */}
			<nav className={`navbar ${props.className}`} role='navigation' style={{display:'flex',justifyContent: 'center'}}>
				<div className='logo'>
					<a href='/'>
						<img src={hvac} alt='Life is Art PLLC logo' height={190} style={{borderRadius:"3px"}}></img>
					</a>
				</div>
				{/* <div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						{/* <li className='nav-item'> */}
							{/* <Link to='/about' onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/events' onClick={closeMobileMenu}>
								Events & Groups
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/contact' onClick={closeMobileMenu}>
								Contact
							</Link>
						</li> 
	</ul> 
				</div>
				<div
					onClick={handleClick}
					aria-label='Main Menu'
					className={click ? 'hamburger is-active' : 'hamburger'}
				>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
				</div> */}
			</nav>
		</>
	);
}

export default Navbar;
