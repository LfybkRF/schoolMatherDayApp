import React from 'react';
import './panels/style.css';

import Home from './panels/Home';

process.env.CI = false;

const App = () => {




	return (
		<div className='app'>
			<Home />

   		</div>
	);
}

export default App;
