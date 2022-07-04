import React from 'react';

import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Home: NextPage = () => {
	const theme = useTheme();
	return (
		<>
			<Typography variant="display" color={theme.palette.common.graphic.blue}>
				hihis
			</Typography>
			<h1>hihi</h1>
		</>
	);
};

export default Home;
