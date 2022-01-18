// ./src/components/App.js
import React from 'react';
import LoginPanel from './LoginPanel';
import GlobalStyle from './styled/GlobalStyle';
import ResetStyle from './styled/ResetStyle';

const App = () => (
	<>
		<ResetStyle />
		<GlobalStyle />
		<LoginPanel />
	</>
);

export default App;
