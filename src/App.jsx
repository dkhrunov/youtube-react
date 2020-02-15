import React, { Fragment } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Home from './containers/Home/Home';
import './styles/main.scss';

function App() {
	return (
		<Fragment>
			<HeaderNav />
			<Home />
		</Fragment>
	);
}

export default App;
