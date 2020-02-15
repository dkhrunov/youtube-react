import React, { Fragment } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';
import Home from './containers/Home/Home';
import './styles/main.scss';

function App() {
	return (
		<Fragment>
			<HeaderNav />
			<SideBar />
			<Home />
		</Fragment>
	);
}

export default App;
