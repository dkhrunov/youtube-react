import React from 'react';
import Home from './containers/Home/Home';
import AppLayout from './components/AppLayout/AppLayout';
import './styles/main.scss';

function App() {
	return (
		<AppLayout>
			<Home />
		</AppLayout>
	);
}

export default App;
