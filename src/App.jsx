import React from 'react';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';
import AppLayout from './components/AppLayout/AppLayout';
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';

function App() {
	return (
		<AppLayout>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/watch' component={Watch} />
			</Switch>
		</AppLayout>
	);
}

export default App;
