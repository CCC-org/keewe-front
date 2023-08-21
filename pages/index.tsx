import React from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div style={{ display: 'flex', height: '100vh', flex: 1, width: '100%' }}>
			<iframe
				src="/main/index.html"
				style={{ width: '100%', border: 'none' }}
			/>
		</div>
	);
};

export default Home;
