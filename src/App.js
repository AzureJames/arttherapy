import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Events from './pages/events';
import Contact from './pages/contact';

function App() {
	return (
		<Router>
			<div className='App'>
				<> 
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/events' element={<Events />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
					</Routes>
				</>
			</div>
		</Router>
	);
}

export default App;
