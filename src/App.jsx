import React, { Fragment } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';

function App() {
	return (
		<Fragment>
			<HeaderNav />
			<SideBar />
		</Fragment>
	);
}

export default App;
